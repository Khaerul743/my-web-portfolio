# Personal Expense Tracker with AI Assistant

Project ini adalah sebuah aplikasi yang saya buat untuk membantu saya **mencatat dan memonitor semua pengeluaran harian saya**. Dengan aplikasi ini saya dapat melihat **trend pengeluaran harian maupun bulanan**, sehingga saya bisa lebih sadar terhadap kebiasaan finansial saya sendiri.

Latar belakang saya membuat project ini cukup sederhana. Sebelumnya saya sering mengalami kesulitan dalam **mengatur pengeluaran sehari-hari**, sehingga tidak jarang saldo saya sudah habis sebelum akhir bulan. Banyak pengeluaran kecil yang sebenarnya tidak terasa, tetapi jika dikumpulkan ternyata cukup besar.

Karena itu saya memutuskan untuk membuat sebuah sistem sederhana yang dapat **mencatat semua pengeluaran saya secara terstruktur**, sehingga saya bisa melihat kemana saja uang saya digunakan.

---

## Problem

Salah satu kesulitan dalam mengatur keuangan pribadi adalah kurangnya visibilitas terhadap pengeluaran sehari-hari.

Beberapa masalah yang saya rasakan antara lain:

- Sulit melacak semua pengeluaran kecil setiap hari
- Tidak mengetahui kategori pengeluaran mana yang paling besar
- Sulit memahami pola pengeluaran dalam jangka waktu tertentu

Tanpa pencatatan yang jelas, cukup sulit untuk mengetahui **bagian mana dari pengeluaran yang perlu dikontrol**.

---

## Solution

Untuk mengatasi masalah tersebut, saya membuat sebuah **aplikasi personal expense tracker** yang dapat mencatat setiap pengeluaran yang saya lakukan.

Melalui aplikasi ini saya dapat:

- Menyimpan semua data pengeluaran harian
- Melihat riwayat pengeluaran
- Melihat trend pengeluaran dari waktu ke waktu

Selain itu, saya juga menambahkan **AI assistant** yang dapat membantu menganalisis data pengeluaran yang telah saya catat.

AI tersebut dapat saya ajak berdiskusi secara santai, misalnya dengan menanyakan:

- bagaimana pola pengeluaran saya dalam satu bulan
- kategori pengeluaran mana yang paling besar
- rekomendasi cara untuk mengurangi pengeluaran

AI akan mengambil data pengeluaran dari database, lalu melakukan analisis berdasarkan pertanyaan yang saya ajukan.

---

## AI Assistant Features

Salah satu fitur utama dari project ini adalah **AI agent yang terintegrasi langsung dengan data pengeluaran**.

Beberapa kemampuan AI tersebut antara lain:

- Memberikan **rekomendasi pengeluaran bulanan**
- Menganalisis **kategori pengeluaran terbesar**
- Memberikan **saran untuk mengurangi pengeluaran**
- Menjawab pertanyaan terkait data pengeluaran yang tersimpan

Dengan pendekatan ini, aplikasi tidak hanya berfungsi sebagai tempat mencatat pengeluaran, tetapi juga sebagai **assistant yang membantu memahami pola finansial saya**.

---

## System Components

Sistem ini terdiri dari beberapa komponen utama:

- **Frontend** untuk menampilkan dashboard dan mencatat pengeluaran
- **Backend API** untuk mengelola data
- **Database** untuk menyimpan riwayat pengeluaran
- **AI agent** untuk melakukan analisis terhadap data

Semua komponen tersebut bekerja sama untuk memberikan pengalaman yang lebih interaktif dalam mengelola keuangan pribadi.

---

## Tech Stack

Project ini dibangun menggunakan beberapa teknologi berikut:

**Backend**
- Flask

**Frontend**
- React
- Vite

**Database**
- MySQL
- SQLAlchemy (ORM)

**AI Agent**
- LangChain

---

## Learning Outcome

Melalui project ini saya belajar bagaimana membangun **aplikasi full-stack yang terintegrasi dengan AI agent**. Saya juga mendapatkan pengalaman dalam menghubungkan data yang tersimpan di database dengan AI agar dapat digunakan untuk proses analisis.

Selain itu, project ini juga membantu saya memahami bagaimana AI dapat digunakan bukan hanya untuk menjawab pertanyaan, tetapi juga untuk **memberikan insight berdasarkan data yang dimiliki oleh sistem**.