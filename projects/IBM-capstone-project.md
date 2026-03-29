# AI Expense Analysis Agent

Project ini adalah sebuah **AI agent yang dapat menganalisis pengeluaran harian saya secara otomatis** hanya dengan memberikan data pengeluaran harian yang saya miliki. Ide dari project ini muncul karena saya menyadari bahwa saya sering merasa **terlalu boros dalam pengeluaran sehari-hari**, meskipun sebenarnya saya sudah berusaha untuk berhemat.

Dalam kehidupan sehari-hari, saya sering membeli makanan, minuman, atau kebutuhan kecil lainnya. Meskipun setiap pembelian terlihat kecil, tetapi jika dikumpulkan dalam satu hari atau beberapa hari, jumlahnya bisa menjadi cukup besar. Terkadang juga ada beberapa hari di mana pengeluaran saya **melebihi rata-rata pengeluaran biasanya**, tetapi saya tidak selalu menyadarinya secara langsung.

Karena itulah saya membuat project ini, yaitu sebuah **AI agent yang dapat membantu saya menganalisis pola pengeluaran harian**, sehingga saya dapat lebih memahami kebiasaan pengeluaran saya dan membuat keputusan finansial yang lebih baik.

---

## Problem

Mengelola pengeluaran harian sering kali tidak mudah karena banyak pengeluaran kecil yang tidak terasa tetapi sebenarnya cukup signifikan jika dikumpulkan.

Beberapa pertanyaan yang sering muncul misalnya:

- Apakah pengeluaran saya hari ini masih wajar?
- Hari mana saja yang memiliki pengeluaran di atas rata-rata?
- Apakah pola pengeluaran saya masih normal atau sudah mulai boros?

Tanpa adanya analisis yang jelas, cukup sulit untuk menjawab pertanyaan-pertanyaan tersebut secara objektif.

---

## Solution

Untuk mengatasi masalah tersebut, saya membuat sebuah **AI agent yang dapat melakukan analisis terhadap data pengeluaran harian** yang saya miliki.

Agent ini melakukan beberapa **analisis statistik deskriptif** terhadap data pengeluaran, di antaranya:

- Mean (rata-rata)
- Median
- Modus
- Standar deviasi
- Variance
- Range
- Uji distribusi normal

Dengan analisis tersebut, agent dapat memberikan gambaran yang lebih jelas mengenai **pola pengeluaran saya**.

Selain itu, sistem juga akan melakukan **klasifikasi terhadap setiap pengeluaran**, yaitu dengan memberi label:

- **NORMAL**
- **BOROS**

Klasifikasi ini membantu saya untuk lebih mudah melihat pengeluaran mana saja yang masih wajar dan mana yang perlu dikontrol agar tidak terlalu boros.

---

## Fitur AI Agent

Beberapa fitur utama yang ada di dalam sistem ini antara lain:

### Conversation Memory

Agent dilengkapi dengan **conversation memory**, sehingga dapat mengingat pertanyaan atau konteks percakapan sebelumnya. Hal ini membantu agent untuk memberikan jawaban yang lebih konsisten serta mengurangi kemungkinan terjadinya halusinasi dalam merespon pertanyaan.

### Analisis Statistik

Agent tidak hanya mengandalkan reasoning dari LLM saja, tetapi juga menggunakan **perhitungan statistik secara langsung terhadap data pengeluaran** sehingga hasil analisis menjadi lebih objektif.

### Klasifikasi Pengeluaran

Setiap data pengeluaran akan diklasifikasikan sebagai **BOROS** atau **NORMAL**, sehingga memudahkan saya untuk melihat pola pengeluaran dan mengidentifikasi kebiasaan yang perlu diperbaiki.

---

## Tech Stack

Project ini dibangun dengan menggabungkan beberapa teknologi berikut:

**Backend**
- Python
- FastAPI

**AI Agent System**
- LangGraph (sebagai agent orchestrator)

**Frontend**
- Next.js

**Model AI**
- GPT-4o-mini
- IBM Granite (digunakan untuk proses klasifikasi data)

---

## Learning Outcome

Melalui project ini saya belajar bagaimana **mengintegrasikan AI agent dengan analisis data dan sistem backend**, serta bagaimana memanfaatkan LLM untuk membantu proses analisis yang lebih interaktif.

Selain itu, project ini juga menjadi **capstone project** yang saya kumpulkan sebagai bukti bahwa saya telah menyelesaikan course dari IBM pada saat itu.