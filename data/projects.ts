let id = 0

type category = "Deep Learning" | "Machine Learning" | "Web Development" | "Backend" | "AI Agent" | "Gen AI" | "MCP"
interface Project {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  slug: string;
  webUrl: string | null;
  githubUrl: string | null;
  category: string[];
  date: string;
}

export const data: Project[] = [
  {
    id: id++,
    thumbnail: "/ann-architecture.png",
    title: "Artificial Neural Network From Scratch",
    description: "Implementasi arsitektur artificial neural network from scratch berserta dengan penerapan konsep matematika menggunakan numpy.",
    slug: "ann-from-scratch",
    webUrl: null,
    githubUrl: "https://github.com/Khaerul743/ann-from-scratch",
    category: ["Machine Learning", "Deep Learning", "Scratch"],
    date: "2026-01-20",
  },
  {
    id: id++,
    thumbnail: "/cnn-scratch.jpg",
    title: "Convolutional Neural Network From Scratch",
    description: "Implementasi arsitektur convolutional neural network from scratch berserta dengan penerapan konsep matematika menggunakan numpy.",
    slug: "cnn-from-scratch",
    webUrl: null,
    githubUrl: "https://github.com/Khaerul743/cnn-from-scratch",
    category: ["Machine Learning", "Deep Learning", "Scratch"],
    date: "2026-01-22",
  },
  {
    id: id++,
    thumbnail: "/rnn-scratch.png",
    title: "Recurrent Neural Network From Scratch",
    description: "Implementasi arsitektur recurrent neural network from scratch berserta dengan penerapan konsep matematika menggunakan numpy.",
    slug: "rnn-from-scratch",
    webUrl: null,
    githubUrl: null,
    category: ["Machine Learning", "Deep Learning", "Scratch"],
    date: "2026-01-25",
  },
  {
    id: id++,
    thumbnail: "/lstm-scratch.png",
    title: "Long Short Term Memory From Scratch",
    description: "Implementasi arsitektur Long Short Term Memory from scratch berserta dengan penerapan konsep matematika menggunakan numpy.",
    slug: "lstm-from-scratch",
    webUrl: null,
    githubUrl: null,
    category: ["Machine Learning", "Deep Learning", "Scratch"],
    date: "2026-01-27",
  },
  {
    id: id++,
    thumbnail: "/transformer-scratch.png",
    title: "Transformer From Scratch",
    description: "Implementasi arsitektur Transformer from scratch berserta dengan penerapan konsep matematika menggunakan numpy.",
    slug: "transformer-from-scratch",
    webUrl: null,
    githubUrl: null,
    category: ["Machine Learning", "Deep Learning", "Scratch"],
    date: "2026-01-30",
  },
  {
    id: id++,
    thumbnail: "/customer-service.png",
    title: "AI Agent Customer Service",
    description: "AI Agent customer service yang terintegrasi dengan whatsapp dan dapat membantu UMKM dalam menjawab pertanyaan dari customer mereka.",
    slug: "customer-service-agent",
    webUrl: null,
    githubUrl: null,
    category: ["Web Development", "Gen AI", "Backend", "frontend"],
    date: "2026-02-12",
  },
  {
    id: id++,
    thumbnail: "/financial-management.png",
    title: "Financial Management",
    description: "Sebuah aplikasi berbasis web yang dapat membantu mencatat keuangan harian serta terdapat sistem AI yang memberikan rekomendasi finansial.",
    slug: "financial-management",
    webUrl: null,
    githubUrl: "https://github.com/Khaerul743/Financial-management-AI",
    category: ["Web Development", "Gen AI", "Backend"],
    date: "2025-06-27",
  },
  {
    id: id++,
    thumbnail: "/IBM-capstone-project.png",
    title: "IBM Capstone Project",
    description: "AI agent yang menganalisis pengeluaran harian menggunakan analisis statistik dan klasifikasi untuk membantu mengambil keputusan finansial.",
    slug: "IBM-capstone-project",
    webUrl: null,
    githubUrl: "https://github.com/Khaerul743/IBM-capstone-project",
    category: ["AI Agent", "Gen AI"],
    date: "2025-08-08",
  },
  {
    id: id++,
    thumbnail: "/crypto-news.png",
    title: "Crypto News Analysis Agent",
    description: "AI Agent yang dapat mengambil dan menganalisis berita harian tentang perkembangan crypto serta dapat memberikan rekomendasi.",
    slug: "crypto-news-analysis-agent",
    webUrl: null,
    githubUrl: "https://github.com/Khaerul743/Crypto-news-agent",
    category: ["AI Agent", "Gen AI"],
    date: "2025-07-29",
  },
  {
    id: id++,
    thumbnail: "/rag-mcp.png",
    title: "RAG Agent with Model Context Protocol (MCP)",
    description: "Mekanisme RAG yang terintegrasi dengan konsep Model Context Protocol (MCP)",
    slug: "rag-mcp",
    webUrl: null,
    githubUrl: "https://github.com/Khaerul743/RAG-agent-mcp",
    category: ["AI Agent", "Gen AI", "MCP"],
    date: "2025-08-02",
  },
]