# Recurrent Neural Network From Scratch

Project ini adalah implementasi **Recurrent Neural Network (RNN) dari nol hanya menggunakan NumPy dan konsep matematika yang saya pelajari**.

Project ini saya bangun karena pada saat itu saya mulai penasaran dengan bagaimana **Large Language Model (LLM)** bekerja. Namun pada saat itu saya baru mempelajari dua arsitektur deep learning sebelumnya, yaitu **Artificial Neural Network (ANN)** dan **Convolutional Neural Network (CNN)**.

Kedua arsitektur tersebut memang sangat powerful untuk banyak jenis permasalahan, tetapi saya menyadari bahwa keduanya **tidak dirancang secara khusus untuk memproses data berbentuk urutan (sequence)** seperti teks.

Dalam sebuah kalimat, setiap kata sangat bergantung pada kata sebelumnya. Dengan kata lain, **data teks memiliki sifat time-series atau sequential**, di mana model harus memiliki mekanisme untuk **mengingat informasi dari langkah sebelumnya**.

Karena itulah saya mulai mempelajari konsep **Recurrent Neural Network (RNN)** yang memiliki mekanisme *recurrent connection* sehingga model dapat membawa informasi dari waktu sebelumnya ke waktu berikutnya.

Untuk memahami konsep tersebut secara lebih mendalam, saya memutuskan untuk **mengimplementasikan arsitektur RNN dari nol menggunakan NumPy**.

---

## Problem

Ketika mencoba memahami bagaimana model dapat menghasilkan teks secara generatif, saya menemukan bahwa model harus mampu:

- memahami hubungan antar kata dalam sebuah kalimat
- mengingat informasi dari kata sebelumnya
- memproses data yang bersifat sequential

Arsitektur ANN dan CNN yang sebelumnya saya pelajari tidak memiliki mekanisme memori untuk menangani masalah tersebut.

---

## Solution

Untuk mengatasi masalah tersebut saya mempelajari dan mengimplementasikan **Recurrent Neural Network (RNN)**.

Berbeda dengan neural network biasa, RNN memiliki **hidden state** yang membawa informasi dari satu langkah waktu ke langkah waktu berikutnya.

Dengan mekanisme ini, model dapat:

- mengingat konteks dari kata sebelumnya
- memahami hubungan antar kata dalam sebuah kalimat
- menghasilkan prediksi kata berikutnya berdasarkan konteks sebelumnya

---

## Dataset

Untuk menjaga fokus pada pemahaman konsep arsitektur RNN, saya menggunakan dataset kalimat yang sangat sederhana:

"saya makan nasi dengan ayam tadi sore"


Meskipun datasetnya sangat kecil, kalimat ini sudah cukup untuk menguji apakah model dapat mempelajari **hubungan antar kata dalam sebuah sequence**.

Tujuan utama dari project ini bukan untuk membuat model bahasa yang kompleks, tetapi untuk **memahami bagaimana mekanisme recurrent bekerja di dalam neural network**.

---

## Architecture

Dalam project ini saya menggunakan **Vanilla Recurrent Neural Network (Vanilla RNN)**.

Vanilla RNN adalah bentuk paling dasar dari arsitektur recurrent neural network, di mana setiap langkah waktu menggunakan hidden state dari langkah sebelumnya untuk menghitung hidden state yang baru.

Secara umum, prosesnya dapat digambarkan sebagai berikut:

- Input kata pada waktu t
- Hidden state dari waktu t-1
- Menghasilkan hidden state baru pada waktu t
- Menghasilkan output prediksi kata berikutnya

Dengan mekanisme ini, model dapat membawa informasi konteks dari waktu sebelumnya.

## Implementation

Dalam project ini saya mengimplementasikan beberapa komponen utama RNN secara manual, antara lain:

- recurrent hidden state
- forward propagation pada sequence
- backpropagation through time (BPTT)
- parameter update
- simple text generation

Seperti project deep learning sebelumnya, saya juga menggunakan pendekatan **Object Oriented Programming (OOP)** untuk menjaga struktur kode tetap rapi dan modular.

Pendekatan ini membuat setiap komponen model seperti layer, parameter, dan proses training menjadi lebih terorganisir.

---

## Tech Stack

Project ini dibangun menggunakan teknologi berikut:

- Python
- NumPy
- Deep Learning fundamentals
- Sequence modeling

---

## Learning Outcome

Melalui project ini saya dapat memahami bagaimana model deep learning memproses **data sequential seperti teks**.

Saya juga memahami bagaimana konsep **hidden state dalam RNN memungkinkan model untuk membawa informasi dari waktu sebelumnya**, yang merupakan dasar dari banyak model language modeling.

Project ini menjadi salah satu langkah awal bagi saya untuk memahami konsep yang lebih besar dalam dunia **Natural Language Processing dan Large Language Model (LLM)**.