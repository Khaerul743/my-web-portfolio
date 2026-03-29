# Artificial Neural Network From Scratch

Project ini adalah implementasi **Artificial Neural Network (ANN) yang saya buat dari nol hanya menggunakan NumPy**. Tujuan utama saya membuat project ini adalah supaya saya dapat memahami **deep learning secara lebih mendalam, terutama dari sisi konsep dan dasar matematikanya**.

Pada saat itu saya merasa cukup kesulitan memahami bagaimana sebenarnya sebuah model deep learning bekerja. Sebelumnya saya hanya menggunakan framework seperti TensorFlow atau PyTorch untuk membangun model. Memang framework tersebut sangat membantu karena membuat proses pengembangan model menjadi jauh lebih cepat dan efisien.

Namun saya menyadari ada satu masalah yang cukup mengganggu bagi saya, yaitu saya **tidak benar-benar memahami apa yang terjadi di balik kode yang saya tulis**. Framework tersebut memberikan tingkat abstraksi yang sangat tinggi sehingga banyak proses penting yang tersembunyi di balik library.

Karena itulah saya memutuskan untuk membuat **implementasi Artificial Neural Network dari nol**, sehingga saya bisa memahami secara langsung bagaimana proses forward propagation, backpropagation, serta proses update parameter bekerja secara matematis.

---

## Problem

Framework deep learning modern seperti TensorFlow dan PyTorch memang sangat powerful dan produktif. Namun bagi seseorang yang ingin benar-benar memahami konsep dasar deep learning, framework tersebut terkadang terasa terlalu abstrak.

Beberapa kesulitan yang saya rasakan antara lain:

- Tidak memahami secara jelas bagaimana proses **forward propagation** bekerja
- Tidak benar-benar memahami bagaimana **gradien dihitung dalam backpropagation**
- Tidak melihat secara langsung bagaimana **parameter model diperbarui**

Hal ini membuat saya merasa bahwa saya hanya menggunakan library tanpa benar-benar memahami mekanismenya.

---

## Solution

Untuk mengatasi hal tersebut, saya membuat implementasi **Artificial Neural Network dari nol menggunakan NumPy**, sehingga semua proses komputasi dapat saya lihat dan pahami secara langsung.

Dalam project ini saya mengimplementasikan beberapa komponen utama dari neural network, antara lain:

- Forward propagation
- Backpropagation
- Perhitungan gradient
- Update parameter model

Dengan pendekatan ini, saya bisa memahami bagaimana setiap bagian dari neural network bekerja secara matematis.

---

## Dataset

Dalam project ini saya menggunakan dataset yang cukup sederhana, yaitu **XOR dataset**.

Walaupun dataset ini sederhana, XOR memiliki sifat **non-linear separable**, sehingga model linear biasa tidak dapat menyelesaikan masalah ini. Hal ini membuat dataset XOR menjadi contoh klasik untuk menunjukkan bagaimana **neural network mampu mempelajari pola non-linear**.

Dengan dataset ini saya dapat memastikan bahwa model neural network yang saya buat benar-benar belajar dan bekerja sesuai dengan konsep dasar deep learning.

---

## Model Design

Untuk menjaga struktur kode tetap rapi dan mudah dikembangkan, saya juga menerapkan pendekatan **Object Oriented Programming (OOP)** dalam implementasinya.

Model neural network yang saya buat cukup fleksibel, sehingga kita dapat dengan mudah mengatur:

- jumlah hidden layer
- jumlah neuron pada setiap layer
- konfigurasi model lainnya

Pendekatan ini memungkinkan model digunakan kembali untuk eksperimen dengan dataset lain.

---

## Optimization

Untuk proses update parameter model, saya menggunakan **Adam Optimizer**.

Adam dipilih karena merupakan salah satu optimizer yang cukup populer dalam deep learning dan dapat membantu proses training menjadi lebih stabil serta konvergen lebih cepat dibandingkan metode gradient descent biasa.

---

## Tech Stack

Project ini dibangun menggunakan teknologi berikut:

- Python
- NumPy
- Deep Learning fundamentals
- Object Oriented Programming (OOP)

---

## Learning Outcome

Melalui project ini saya mendapatkan pemahaman yang jauh lebih baik mengenai **bagaimana neural network bekerja di balik layar**.

Saya belajar secara langsung bagaimana:

- forward propagation menghitung output model
- backpropagation menghitung gradient
- parameter model diperbarui melalui optimizer

Project ini menjadi pengalaman yang sangat penting bagi saya karena membantu saya memahami bahwa framework seperti TensorFlow atau PyTorch sebenarnya hanyalah **abstraksi dari proses matematis yang lebih fundamental**.