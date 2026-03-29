# Convolutional Neural Network From Scratch

Project ini adalah implementasi **Convolutional Neural Network (CNN) yang saya buat dari nol hanya menggunakan NumPy dan konsep matematika yang saya pelajari**.

Project ini merupakan lanjutan dari project sebelumnya di mana saya membuat **Artificial Neural Network (ANN) dari nol**. Setelah memahami bagaimana neural network dasar bekerja, saya mencoba mempelajari arsitektur deep learning yang lebih kompleks, khususnya untuk **memproses data berbentuk gambar**.

Pada awalnya saya mencoba menggunakan pendekatan ANN biasa untuk mengklasifikasikan gambar. Namun saya menyadari bahwa pendekatan tersebut **tidak efisien secara komputasi**.

Hal ini terjadi karena sebuah gambar terdiri dari banyak pixel. Jika setiap pixel dijadikan input langsung ke dalam layer ANN, maka jumlah parameter yang harus diproses menjadi sangat besar.

Karena itulah saya mulai mempelajari **Convolutional Neural Network (CNN)** yang memang dirancang khusus untuk memproses data berbentuk gambar secara lebih efisien.

---

## Problem

Ketika mencoba membangun model klasifikasi gambar menggunakan ANN biasa, saya menemukan beberapa masalah utama:

- jumlah parameter yang sangat besar
- proses komputasi menjadi tidak efisien
- model sulit mempelajari pola spasial dari gambar

Pendekatan ANN tidak memanfaatkan **struktur spasial dari gambar**, sehingga semua pixel diperlakukan sebagai input yang terpisah.

Hal ini membuat ANN kurang optimal untuk tugas yang berkaitan dengan **computer vision**.

---

## Solution

Untuk mengatasi masalah tersebut, saya mempelajari dan mengimplementasikan **Convolutional Neural Network (CNN)** dari nol menggunakan NumPy.

CNN menggunakan operasi **convolution** untuk mengekstraksi fitur dari gambar secara lebih efisien. Dengan menggunakan kernel atau filter kecil yang bergerak di seluruh gambar, CNN dapat menangkap pola-pola penting seperti:

- edge
- texture
- bentuk objek

Pendekatan ini jauh lebih efisien dibandingkan ANN karena jumlah parameter yang digunakan jauh lebih sedikit.

---

## Dataset

Dalam project ini saya menggunakan **dataset MNIST**, tetapi hanya menggunakan subset sederhana yaitu **digit 0 dan digit 1**.

Dataset ini dipilih karena:

- cukup sederhana untuk eksperimen awal CNN
- tetap merepresentasikan data gambar nyata
- dapat membantu memverifikasi bahwa model benar-benar mampu melakukan klasifikasi gambar

Dengan dataset ini saya dapat menguji apakah CNN yang saya implementasikan benar-benar dapat mempelajari perbedaan pola antara dua digit tersebut.

---

## CNN Architecture Concept

Salah satu konsep penting yang saya pelajari ketika mengimplementasikan CNN dari nol adalah bagaimana arsitektur deep learning biasanya dibagi menjadi dua bagian utama.

### Body (Feature Extractor)

Bagian ini bertugas untuk **mengekstraksi fitur dari data input**.

Dalam arsitektur CNN, bagian ini biasanya terdiri dari:

- Convolutional layer
- Activation function
- Pooling layer

Layer-layer tersebut bekerja bersama untuk menangkap berbagai pola dari gambar.

### Head (Predictor)

Bagian ini bertugas untuk **menghasilkan prediksi akhir dari fitur yang telah diekstraksi**.

Dalam CNN, bagian ini biasanya berupa **fully connected layer** yang bertindak sebagai classifier.

Konsep **body sebagai feature extractor dan head sebagai predictor** ternyata merupakan pola yang cukup umum dalam banyak arsitektur deep learning modern.

Memahami konsep ini sangat membantu saya untuk memahami arsitektur model yang lebih kompleks di kemudian hari.

---

## Implementation

Dalam project ini saya mengimplementasikan beberapa komponen utama CNN secara manual, antara lain:

- convolution operation
- activation function
- pooling layer
- fully connected layer
- forward propagation
- backpropagation

Untuk menjaga struktur kode tetap rapi dan mudah dikembangkan, saya juga menggunakan pendekatan **Object Oriented Programming (OOP)** seperti yang saya lakukan pada project neural network sebelumnya.

Dengan pendekatan ini, setiap komponen model seperti layer, optimizer, dan proses training dapat dikelola secara lebih modular dan lebih mudah dipahami.

---

## Tech Stack

Project ini dibangun menggunakan teknologi berikut:

- Python
- NumPy
- Deep Learning fundamentals
- Computer Vision concepts

---

## Learning Outcome

Melalui project ini saya mendapatkan pemahaman yang jauh lebih dalam mengenai bagaimana **model deep learning memproses data gambar**.

Saya juga belajar bagaimana operasi convolution dapat membuat proses komputasi menjadi lebih efisien dibandingkan menggunakan neural network biasa.

Selain itu, saya juga memahami konsep penting dalam arsitektur deep learning, yaitu **pemisahan antara bagian feature extractor (body) dan predictor (head)**. Konsep ini sangat membantu saya dalam memahami berbagai arsitektur deep learning yang lebih kompleks.