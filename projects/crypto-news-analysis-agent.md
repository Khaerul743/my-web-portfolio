# Crypto News Analysis Agent

Project ini adalah sebuah **AI agent yang dapat mengambil berita harian tentang cryptocurrency, kemudian menganalisis pengaruhnya terhadap pasar crypto dan memberikan rekomendasi keputusan investasi**.

Latar belakang saya membuat project ini adalah karena pada saat itu saya sedang cukup tertarik dengan dunia investasi, khususnya pada aset cryptocurrency. Saya sering membaca berita tentang crypto, tetapi terkadang cukup sulit untuk mengetahui apakah suatu berita benar-benar berdampak terhadap pasar atau tidak.

Karena itu saya berpikir untuk membuat sebuah **AI agent yang dapat secara otomatis mengambil berita crypto, menganalisis informasi tersebut, lalu memberikan insight dan rekomendasi yang bisa membantu saya dalam mengambil keputusan**.

Selain itu, pada saat itu saya juga ingin mencoba **melakukan integrasi antara n8n dengan AI agent lokal yang saya bangun menggunakan LangGraph**. Project ini akhirnya menjadi media eksperimen bagi saya untuk memahami bagaimana berbagai sistem dapat saling terhubung melalui API dan webhook.

---

## Problem

Dalam dunia cryptocurrency, informasi bergerak sangat cepat. Berita baru bisa muncul setiap saat dan sering kali memiliki dampak terhadap sentimen pasar.

Namun, ada beberapa tantangan yang saya rasakan:

- Sulit untuk memantau berita crypto secara konsisten setiap hari.
- Tidak semua berita benar-benar berdampak terhadap pasar.
- Membutuhkan waktu untuk membaca dan menganalisis berita sebelum mengambil keputusan.

Karena itu saya membutuhkan sebuah sistem yang dapat **secara otomatis mengambil berita, melakukan analisis awal, dan memberikan insight yang lebih ringkas**.

---

## Solution

Untuk mengatasi masalah tersebut, saya membuat sebuah **AI agent yang secara otomatis mengambil data berita cryptocurrency setiap hari, lalu menganalisis dampaknya terhadap pasar**.

Agent ini akan:

1. Mengambil data berita dan informasi crypto melalui API
2. Mengirimkan data tersebut ke AI agent
3. Melakukan analisis terhadap potensi pengaruh berita terhadap pasar
4. Memberikan insight serta rekomendasi keputusan

Dengan pendekatan ini, saya dapat menerima ringkasan analisis tanpa harus membaca semua berita secara manual.

---

## Integrasi Sistem

Salah satu tujuan utama dari project ini adalah untuk mencoba **integrasi antara beberapa sistem yang berbeda**.

Arsitektur yang saya bangun melibatkan beberapa komponen berikut:

- **n8n** digunakan untuk mengambil data dari API eksternal
- **FastAPI** berfungsi sebagai backend API yang menerima data
- **LangGraph** digunakan sebagai orchestrator untuk AI agent

Dalam implementasinya, **n8n saya gunakan untuk mengambil data dari CoinGecko API**, kemudian data tersebut dikirim ke backend FastAPI melalui webhook.

Setelah itu, FastAPI akan meneruskan data tersebut kepada AI agent yang berjalan menggunakan LangGraph untuk dianalisis.

Bagi saya, n8n dalam sistem ini bisa dianalogikan sebagai **“tangan” dari AI agent**, karena ia bertugas mengambil data dari berbagai sumber eksternal sebelum data tersebut diproses oleh agent.

---

## Automation Workflow

Project ini juga memanfaatkan fitur **automation workflow** dari n8n.

Saya membuat workflow yang berjalan menggunakan **cron schedule**, sehingga setiap hari pada pukul **07:00 pagi** sistem akan:

1. Mengambil data terbaru dari API
2. Mengirimkan data tersebut ke AI agent
3. Melakukan analisis
4. Menghasilkan insight dan rekomendasi

Dengan workflow ini, saya dapat menerima informasi yang sudah diringkas oleh agent setiap pagi tanpa harus mencari berita secara manual.

---

## Tech Stack

Project ini dibangun dengan kombinasi beberapa teknologi berikut:

**Backend**
- Python
- FastAPI

**AI Agent System**
- LangGraph (Agent Orchestration)

**Automation & Integration**
- n8n

**External Data Source**
- CoinGecko API

---

## Learning Outcome

Melalui project ini saya belajar banyak tentang **integrasi antar sistem menggunakan API dan webhook**, terutama ketika menghubungkan automation tools seperti n8n dengan AI agent yang berjalan secara lokal.

Saya juga mendapatkan pemahaman yang lebih baik tentang bagaimana **workflow automation dapat digabungkan dengan AI agent**, sehingga agent tidak hanya merespon permintaan pengguna, tetapi juga dapat bekerja secara otomatis berdasarkan jadwal tertentu.

Project ini juga memberikan saya pengalaman praktis dalam membangun **pipeline data sederhana yang menghubungkan API eksternal, automation workflow, dan AI reasoning dalam satu sistem yang terintegrasi.**