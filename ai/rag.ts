import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { Document } from "@langchain/core/documents";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { config } from "dotenv";
import * as fs from "fs/promises";
import * as path from "path";

config()
export class RagService {
    private vectorStore: FaissStore | null = null;
    private readonly indexPath = "./faiss_index";
    private readonly embeddings = new OpenAIEmbeddings({
        openAIApiKey: process.env.OPENAI_API_KEY,
    });

    constructor() {}

    /**
     * Load FAISS index dari lokal jika ada
     */
    async init() {
        try {
            // Tambahin await di depan sini bang
            const exists = await fs.access(this.indexPath)
                .then(() => true)
                .catch(() => false);

            if (exists) {
                this.vectorStore = await FaissStore.load(this.indexPath, this.embeddings);
                console.log("✅ Vector store loaded successfully.");
            } else {
                console.log("ℹ️ Index path not found, skipping load.");
            }
        } catch (error) {
            console.error("❌ Error during FAISS initialization:", error);
        }
    }

    /**
     * Proses Ingest: Baca .md -> Split -> Simpan ke FAISS
     */
    async ingestMarkdownFiles(directoryPath: string) {
        const files = await fs.readdir(directoryPath);
        const mdFiles = files.filter(f => f.endsWith(".md"));
        
        const allChunks: Document[] = [];
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 850,
            chunkOverlap: 120,
        });

        for (const file of mdFiles) {
            const content = await fs.readFile(path.join(directoryPath, file), "utf-8");
            const projectName = path.parse(file).name;

            const chunks = await splitter.createDocuments(
                [content],
                [{ project_name: projectName, source: file }]
            );
            allChunks.push(...chunks);
        }

        this.vectorStore = await FaissStore.fromDocuments(allChunks, this.embeddings);
        await this.vectorStore.save(this.indexPath);
        console.log(`🚀 Ingested ${mdFiles.length} projects with ${allChunks.length} chunks.`);
    }

    async searchContext(query: string, k = 2, projectName?: string): Promise<string> {
        if (!this.vectorStore) {
            await this.init();
        }

        if (!this.vectorStore) return "No context available.";

        // Buat objek filter jika projectName dikirim
        // FAISS di LangChain JS mendukung filter sederhana berbasis objek
        const filter = projectName 
            ? { project_name: projectName } 
            : undefined;

        // Similarity search dengan filter
        const results = await this.vectorStore.similaritySearch(
            query, 
            k, 
            filter // <--- Filter masuk di sini
        );
        
        if (results.length === 0) {
            return `Tidak ditemukan informasi spesifik mengenai ${projectName || 'pertanyaan tersebut'}.`;
        }

        return results
            .map(doc => `[Source: ${doc.metadata.project_name}]\n${doc.pageContent}`)
            .join("\n\n---\n\n");
    }
}

export const ragService = new RagService()
// async function main(){
//     const result = await ragService.searchContext("Ceritakan project transformer",2,"transformer-from-scratch")
//     console.log(result)
// }
// main()