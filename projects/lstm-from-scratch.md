# Long Short-Term Memory From Scratch

Project ini adalah implementasi **arsitektur Long Short-Term Memory (LSTM) dari nol hanya menggunakan NumPy dan konsep matematika yang saya pelajari**.

Project ini saya buat setelah sebelumnya saya mempelajari **Recurrent Neural Network (RNN)**. Dari eksperimen yang saya lakukan pada project RNN sebelumnya, saya mulai memahami bagaimana model dapat memproses data sequential seperti teks.

Namun saya juga menemukan bahwa **Vanilla RNN memiliki beberapa keterbatasan**, terutama ketika model harus memproses sequence yang panjang.

Salah satu masalah utama dari RNN adalah model **sulit mengingat informasi yang berada di awal sequence** ketika kalimat atau sequence menjadi terlalu panjang.

Hal ini terjadi karena adanya fenomena **vanishing gradient**, yaitu kondisi di mana nilai gradient menjadi semakin kecil ketika proses backpropagation dilakukan melalui banyak langkah waktu (*time step*).

Akibatnya, informasi dari kata-kata awal dalam sebuah kalimat seringkali **tidak dapat dipertahankan oleh model**.

Karena itulah saya memutuskan untuk mempelajari dan mengimplementasikan **arsitektur Long Short-Term Memory (LSTM)**.

---

## Problem

Vanilla RNN memiliki beberapa keterbatasan ketika digunakan untuk memproses sequence yang panjang, di antaranya:

- sulit mempertahankan informasi dari awal sequence
- gradient semakin mengecil saat backpropagation melalui banyak time step
- model kesulitan mempelajari dependensi jangka panjang (*long-term dependency*)

Masalah ini dikenal sebagai **vanishing gradient problem**, yang membuat RNN kurang efektif untuk sequence yang panjang.

---

## Solution

Untuk mengatasi masalah tersebut, para peneliti mengembangkan arsitektur **Long Short-Term Memory (LSTM)**.

LSTM dirancang dengan mekanisme **memory cell** dan beberapa **gate** yang dapat mengontrol aliran informasi di dalam network.

Gate tersebut memungkinkan model untuk:

- menyimpan informasi penting
- melupakan informasi yang tidak diperlukan
- memperbarui memori secara terkontrol

Dengan mekanisme ini, model dapat **mempertahankan informasi dalam sequence yang lebih panjang dibandingkan Vanilla RNN**.

---

## LSTM Mechanism

Salah satu konsep penting dalam LSTM adalah mekanisme **cell state** yang berfungsi sebagai jalur utama aliran informasi.

Cell state ini sering dianalogikan seperti **highway (jalan tol)** bagi gradient.

Artinya, gradient dapat mengalir melalui cell state dengan lebih stabil tanpa cepat mengecil seperti pada arsitektur RNN biasa.

Di dalam LSTM terdapat beberapa komponen utama:

- **Forget Gate** → menentukan informasi mana yang harus dibuang dari memori  
- **Input Gate** → menentukan informasi baru yang akan disimpan  
- **Cell State Update** → memperbarui memori internal  
- **Output Gate** → menentukan output dari hidden state  

Mekanisme inilah yang memungkinkan LSTM untuk **menangani long-term dependency dengan lebih baik**.

---

## Implementation

Dalam project ini saya mengimplementasikan beberapa komponen utama LSTM secara manual, antara lain:

- memory cell
- forget gate
- input gate
- output gate
- forward propagation
- backpropagation through time

Seperti project deep learning sebelumnya, saya juga menggunakan pendekatan **Object Oriented Programming (OOP)** agar struktur kode lebih modular dan mudah dipahami.

Dengan pendekatan ini, setiap komponen seperti layer, gate, dan proses training dapat diorganisasi dengan lebih rapi.

---

## Tech Stack

Project ini dibangun menggunakan teknologi berikut:

- Python  
- NumPy  
- Deep Learning fundamentals  
- Sequence modeling  

---

## Learning Outcome

Melalui project ini saya dapat memahami bagaimana arsitektur LSTM dirancang untuk mengatasi keterbatasan dari Vanilla RNN.

Saya juga memahami bagaimana mekanisme **cell state dan gate pada LSTM memungkinkan model untuk mempertahankan informasi dalam sequence yang panjang**.

Project ini membantu saya untuk memahami lebih dalam bagaimana model deep learning menangani **long-term dependency dalam data sequential**, yang merupakan konsep penting dalam berbagai aplikasi Natural Language Processing dan language modeling.