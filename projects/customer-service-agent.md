# AI Customer Service Agent for UMKM

Project ini adalah **AI Agent yang saya buat untuk membantu UMKM dalam mengotomatisasi layanan customer service**, khususnya untuk menjawab pertanyaan pelanggan yang bersifat repetitif seperti:

- pertanyaan tentang menu
- harga produk
- jam operasional
- status pesanan

Ide project ini muncul ketika saya melihat bahwa **potensi ekonomi UMKM di Indonesia sangat besar**, tetapi banyak proses operasional yang masih dilakukan secara manual.

---

## Background Problem

Sektor **UMKM Food and Beverage (F&B)** merupakan salah satu sektor yang sangat dominan dalam ekonomi nasional. Pada tahun 2025, sektor ini bahkan mencatat **pertumbuhan sekitar 6,49%**, yang menunjukkan bahwa bisnis F&B masih memiliki potensi ekonomi yang besar.

Namun di sisi lain, transformasi digital juga membawa tantangan baru bagi para pelaku usaha.

Sebagian besar interaksi antara pelanggan dan bisnis di Indonesia terjadi melalui **WhatsApp**. Berdasarkan berbagai laporan penggunaan digital di Indonesia, sekitar **88% masyarakat menggunakan WhatsApp setiap minggu untuk berkomunikasi**, termasuk untuk keperluan bisnis seperti:

- menanyakan menu
- bertanya harga
- melakukan pemesanan
- menanyakan promo

Bagi pelaku UMKM, kondisi ini seringkali menyebabkan **lonjakan pertanyaan pelanggan yang harus dijawab secara manual**.

Akibatnya:

- waktu operasional menjadi tidak efisien
- pemilik bisnis harus terus memantau chat pelanggan
- banyak pertanyaan yang sebenarnya bersifat repetitif

Hal ini membuat saya berpikir bahwa **AI dapat membantu mengotomatisasi sebagian besar komunikasi tersebut**.

---

## Motivation

Saya juga melihat bahwa **tren penggunaan AI secara global terus meningkat**, tetapi **tingkat adopsi AI di Indonesia, terutama pada UMKM, masih relatif rendah**.

Padahal dengan teknologi yang tersedia saat ini, sebenarnya cukup memungkinkan untuk membuat sistem AI yang dapat membantu bisnis kecil dalam mengelola komunikasi dengan pelanggan.

Karena itulah saya membuat project ini sebagai eksperimen untuk melihat bagaimana **AI Agent dapat digunakan secara praktis untuk membantu operasional UMKM**.

---

## Solution

Untuk menjawab permasalahan tersebut, saya membangun **AI Customer Service Agent** yang dapat membantu bisnis menjawab pertanyaan pelanggan secara otomatis.

Agent ini dirancang untuk menangani berbagai pertanyaan umum dari pelanggan melalui integrasi dengan **WhatsApp**.

Dengan adanya sistem ini, pelaku UMKM dapat:

- mengurangi beban menjawab pertanyaan manual
- meningkatkan respons kepada pelanggan
- tetap fokus pada operasional bisnis utama

---

## System Features

Project ini dirancang tidak hanya sebagai prototype AI agent, tetapi juga sebagai **fondasi untuk sistem SaaS**.

Beberapa fitur utama yang saya implementasikan antara lain:

### Multi User System

Sistem mendukung **multi-user**, sehingga setiap bisnis dapat memiliki agent mereka sendiri.

### Authentication & Authorization

User harus melakukan login dan memiliki akses yang terkontrol terhadap agent dan data bisnis mereka.

### WhatsApp Integration

Agent dapat terhubung dengan WhatsApp untuk menerima dan merespon pesan pelanggan secara otomatis.

### Business Knowledge (RAG)

Agent dilengkapi dengan **Retrieval Augmented Generation (RAG)** yang memungkinkan user menambahkan konteks bisnis mereka seperti:

- menu
- harga
- kebijakan bisnis
- informasi operasional

Dengan adanya knowledge ini, agent dapat memberikan jawaban yang lebih spesifik sesuai dengan bisnis masing-masing.

### Document Knowledge

User juga dapat menambahkan dokumen tambahan sebagai sumber informasi bagi agent.

### Agent Customization

User dapat melakukan berbagai konfigurasi terhadap agent mereka, seperti:

- base prompt
- tone komunikasi
- temperature
- model yang digunakan

Hal ini memungkinkan setiap bisnis memiliki **agent yang sesuai dengan karakter brand mereka**.

---

## Human Fallback Mechanism

Meskipun tujuan dari project ini adalah untuk mengotomatisasi layanan customer service, saya juga menyadari bahwa **AI tidak selalu mampu menjawab semua pertanyaan pelanggan dengan sempurna**.

Oleh karena itu, saya menambahkan mekanisme **human fallback** pada sistem ini.

Human fallback adalah mekanisme di mana agent akan mengevaluasi **confidence level dari respon yang dihasilkan oleh AI**. Jika tingkat keyakinan model terhadap jawabannya terlalu rendah, maka sistem tidak akan memaksakan AI untuk menjawab pertanyaan tersebut.

Sebaliknya, agent akan **mengalihkan percakapan kepada customer service admin** agar dapat ditangani secara langsung oleh manusia.

Dengan pendekatan ini, sistem tetap dapat memberikan efisiensi dalam menjawab pertanyaan yang bersifat repetitif, tetapi tetap menjaga kualitas layanan ketika terjadi pertanyaan yang lebih kompleks atau di luar konteks knowledge yang dimiliki oleh agent.

Pendekatan ini juga menunjukkan bahwa sistem ini **tidak dirancang untuk menggantikan peran manusia sepenuhnya**, melainkan untuk membantu pekerjaan customer service agar lebih efisien.

Dengan kata lain, AI dalam sistem ini berfungsi sebagai **asisten bagi admin**, bukan sebagai pengganti sepenuhnya.

---

## System Architecture

Project ini dibangun menggunakan arsitektur yang memisahkan antara backend system, agent orchestration, dan frontend interface.

Secara umum arsitektur sistem terdiri dari beberapa komponen utama:

- **FastAPI** sebagai backend utama untuk API
- **LangGraph** sebagai orchestrator AI agent
- **Next.js** sebagai frontend dan BFF (Backend For Frontend)
- **RAG pipeline** untuk business knowledge
- **WhatsApp API** untuk komunikasi dengan pelanggan

Dengan arsitektur ini, sistem dapat dengan mudah dikembangkan lebih lanjut jika ingin dijadikan produk SaaS yang lebih lengkap.

---

## Tech Stack

Teknologi yang saya gunakan dalam project ini antara lain:

- FastAPI
- LangGraph
- Next.js
- Retrieval Augmented Generation (RAG)
- WhatsApp API
- Authentication & Authorization system

---

## Learning Outcome

Melalui project ini saya belajar bagaimana membangun **AI agent yang terintegrasi dengan sistem bisnis nyata**.

Saya juga memahami bagaimana menggabungkan beberapa komponen penting dalam sistem AI modern seperti:

- agent orchestration
- knowledge retrieval (RAG)
- API integration
- multi-user system

Project ini juga memberi saya pengalaman dalam merancang sistem AI yang tidak hanya bersifat eksperimen, tetapi juga **berpotensi dikembangkan menjadi produk SaaS di masa depan**.