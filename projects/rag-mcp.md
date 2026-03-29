# RAG Agent with Model Context Protocol (MCP)

Project ini adalah sebuah **AI agent berbasis RAG (Retrieval Augmented Generation)** yang terintegrasi langsung dengan **Model Context Protocol (MCP)**.

Saya membuat project ini karena saya ingin memahami bagaimana sebuah AI agent dapat berinteraksi dengan **tools eksternal melalui MCP**. Selain itu, project ini juga berangkat dari masalah yang sering saya temui ketika mengembangkan AI agent.

Biasanya ketika saya membuat project AI baru, saya harus **membuat ulang berbagai tools yang dibutuhkan oleh agent**, seperti tools untuk mengambil data, melakukan perhitungan, atau melakukan proses tertentu. Hal ini cukup memakan waktu karena setiap project harus mengimplementasikan tools tersebut dari awal.

Karena itu saya mencoba menggunakan **konsep MCP**, sehingga AI agent yang saya bangun dapat langsung menggunakan tools yang tersedia di server tanpa harus membuat ulang tools tersebut setiap kali membuat project baru.

---

## Problem

Dalam pengembangan AI agent, sering kali kita perlu membuat berbagai tools agar agent dapat melakukan tugas tertentu.

Masalahnya adalah:

- Tools yang dibuat sering kali hanya digunakan pada satu project
- Ketika membuat project baru, tools tersebut harus dibuat ulang
- Hal ini membuat proses development menjadi kurang efisien

Selain itu, saya juga ingin memahami bagaimana sebuah **agent dapat menggunakan tools yang berada di luar sistemnya secara modular**.

---

## Solution

Untuk mengatasi masalah tersebut, saya membuat sebuah **AI agent berbasis RAG yang terintegrasi dengan Model Context Protocol (MCP)**.

Dengan pendekatan ini, agent tidak perlu lagi memiliki semua tools secara lokal. Sebaliknya, agent dapat **memanggil tools yang tersedia di MCP server**.

Pendekatan ini memberikan beberapa keuntungan:

- Tools dapat digunakan kembali oleh berbagai project
- Arsitektur sistem menjadi lebih modular
- Pengembangan agent menjadi lebih fleksibel

Agent hanya perlu mengetahui bagaimana cara berkomunikasi dengan server MCP, lalu tools yang tersedia di server tersebut dapat langsung digunakan.

---

## RAG Pipeline

Selain integrasi MCP, project ini juga menggunakan **Retrieval Augmented Generation (RAG)** untuk meningkatkan kualitas jawaban dari AI.

Pipeline yang digunakan dalam sistem ini kira-kira seperti berikut:

User Query  
↓  
Retriever (Vector Search)  
↓  
Relevant Context  
↓  
LLM Reasoning  
↓  
Final Response

Dengan pendekatan ini, AI agent dapat memberikan jawaban yang lebih kontekstual berdasarkan dokumen yang tersedia di knowledge base.

---

## Integrasi MCP

Dalam sistem ini, MCP digunakan sebagai **jembatan komunikasi antara AI agent dan tools yang tersedia di server**.

Alur kerjanya secara sederhana adalah:

User Query  
↓  
AI Agent (LangGraph)  
↓  
Request Tool via MCP  
↓  
MCP Server  
↓  
Tool Execution  
↓  
Result Returned to Agent

Dengan arsitektur ini, tools tidak lagi menjadi bagian dari agent secara langsung, melainkan berada pada server yang dapat diakses oleh berbagai agent.

---

## Tech Stack

Project ini dibangun menggunakan beberapa teknologi berikut:

**AI Agent Orchestration**
- LangGraph

**RAG Framework**
- LangChain

**Vector Store**
- FAISS

**Tool Communication**
- Model Context Protocol (MCP)

**Model**
- GPT-3.5-turbo
- GPT-4o-mini

---

## Learning Outcome

Melalui project ini saya mendapatkan pemahaman yang lebih dalam tentang bagaimana **Model Context Protocol (MCP) dapat digunakan untuk membuat sistem AI yang lebih modular dan reusable**.

Saya juga belajar bagaimana mengintegrasikan **RAG pipeline dengan AI agent**, serta bagaimana agent dapat berinteraksi dengan tools eksternal melalui protokol komunikasi yang terstandarisasi.

Project ini membantu saya memahami bahwa dengan pendekatan yang tepat, **AI agent dapat dibangun dengan arsitektur yang lebih scalable dan tidak bergantung pada implementasi tools secara lokal di setiap project.**