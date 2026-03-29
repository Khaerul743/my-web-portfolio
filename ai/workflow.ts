import { RunnableConfig } from "@langchain/core/runnables";
import { END, START, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
import { config } from "dotenv";
import { AIMessage } from "langchain";
import { MainState } from "./models";
import { Prompt } from "./prompt";
import { searchPortfolio } from "./tool";
config()
export class Workflow {
    private prompt: Prompt
    private llm: ChatOpenAI
    public app: any;

    constructor(prompt: Prompt) {
        const apiKey = process.env.OPENAI_API_KEY
        this.prompt = prompt
        this.llm = new ChatOpenAI({
            model: "gpt-4o-mini",
            openAIApiKey: apiKey
        })
        this.app = this.buildWorkflow();
    }

    private buildWorkflow() {
        // 1. Inisialisasi Graph dengan State yang sudah kita buat
        const workflow = new StateGraph(MainState)
            // 2. Tambahkan node. WAJIB pakai .bind(this)
            .addNode("agent", this.main.bind(this))
            .addEdge(START, "agent")
            .addEdge("agent", END)
        // .addConditionalEdges(
        //     "agent",
        //     this.shouldContinue,
        //     ["tool", END]
        // )
        // // Setelah tool selesai, balik lagi ke agent buat ngerangkum jawaban
        // .addEdge("tool", "agent");


        // 4. Compile graph jadi aplikasi yang bisa di-invoke
        return workflow.compile();
    }

    public async main(state: typeof MainState.State) {
        console.log(`PAGE CURRENT: ${state.page}`)
        const mainPrompt = this.prompt.main(state.userMessage, state.page || "")
        const response = await this.llm.invoke([...mainPrompt, ...state.messages])
        return {
            messages: [response], // Otomatis di-append oleh reducer
            response: response.content
        };
    }

    public shouldContinue(state: typeof MainState.State) {
        const { messages } = state;
        // Ambil pesan terakhir dan cast ke AIMessage
        const lastMessage = messages[messages.length - 1] as AIMessage;
        // 1. Cek apakah pesan ada
        // 2. Cek apakah itu memang AIMessage yang punya tool_calls
        if (lastMessage && lastMessage.tool_calls && lastMessage.tool_calls.length > 0) {
            return "tool";
        }

        return END;
    }

    public async callTools(state: typeof MainState.State, config?: RunnableConfig) {
        // Kita masukkan state ke dalam configurable supaya tool bisa akses
        const toolContext = {
            ...config,
            configurable: {
                ...config?.configurable,
                values: state // Inject seluruh state ke sini
            }
        };
        const toolNode = new ToolNode([searchPortfolio]);
        return await toolNode.invoke(state, toolContext);
    }

    public async run(userMessage: string, page: string, topic: string) {
        const res = await this.app.invoke({ messages: [], userMessage: userMessage, page: page, topic: topic })
        return res.response
    }
}