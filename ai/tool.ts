import { tool } from "@langchain/core/tools";
import z from "zod";
import { ragService } from "./rag";

export const searchPortfolio = tool(
  // Argumen kedua kita sebut 'runnableConfig'
  async (input, runnableConfig) => {
    // Di LangGraph, state yang kita inject masuk ke runnableConfig.configurable.values
    const state = runnableConfig?.configurable?.values; 
    
    const currentTopic = state?.topic;
    const currentPage = state?.page;

    console.log(`Searching for: ${input.query} in topic: ${currentTopic}`);

    const context = await ragService.searchContext(
        input.query, 
        3, 
        currentTopic || undefined
    );
    
    return context;
  },
  {
    name: "search_portfolio",
    description: "Cari info di dokumen portfolio.",
    schema: z.object({
      query: z.string(),
    }),
  }
);