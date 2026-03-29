// ai/agent.ts
"use server" 
import { prompt } from "./prompt";
import { Workflow } from "./workflow";

class Agent {
    workflow: Workflow
    constructor() {
        this.workflow = new Workflow(prompt)
    }
    public async invoke(userMessage: string, page: string, topic: string) {
        const result = await this.workflow.run(userMessage, page, topic)
        return result
    }
}

const instance = new Agent()

export async function runAgentAction(userMessage: string, page: string, topic: string) {
    return await instance.invoke(userMessage, page, topic);
}