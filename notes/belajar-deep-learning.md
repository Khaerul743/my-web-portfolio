# Belajar Deep Learning From Scratch: Sebuah Proses Memahami Fundamental

Pada catatan kali ini saya akan menceritakan tentang pengalaman saya dalam belajar deep learning, terutama ketika saya mencoba mempelajarinya dari nol (*from scratch*) dengan memahami fundamental matematika di dalamnya.

Dalam mempelajari deep learning ternyata tidak semudah yang saya kira. Konsepnya sangat berbeda dengan machine learning klasik yang sebelumnya sudah saya pelajari. Walaupun secara fundamental keduanya sama-sama menggunakan matematika, tetapi tingkat kompleksitasnya sangat berbeda.

Pada machine learning klasik, matematika yang digunakan relatif lebih sederhana. Misalnya pada model *Naive Bayes* yang banyak menggunakan konsep statistik dan probabilitas. Sedangkan pada deep learning, bahkan untuk model sederhana seperti *Artificial Neural Network (ANN)*, kita sudah harus memahami linear algebra dan kalkulus sebagai fondasi utama. Oleh karena itu, secara kompleksitas, deep learning memang jauh lebih menantang dibandingkan machine learning.

Salah satu kesalahan saya di awal adalah langsung menggunakan framework seperti TensorFlow dan PyTorch tanpa memahami fundamental dari model yang saya gunakan. Hal ini membuat saya cukup kesulitan untuk memahami bagaimana sebuah model dapat menghasilkan prediksi dan bagaimana model tersebut belajar dari kesalahan.

Memang benar bahwa framework dapat membuat proses training menjadi jauh lebih cepat dan efisien. Namun bagi saya, framework itu seperti pisau bermata dua. Di satu sisi, kita bisa membangun model dengan cepat. Tetapi di sisi lain, karena tingkat abstraksinya cukup tinggi, kita jadi tidak benar-benar memahami apa yang terjadi di balik layar. Akibatnya, ketika model mengalami masalah, kita tidak tahu harus mulai dari mana untuk memperbaikinya.

Dari situlah saya mulai mengambil keputusan untuk mencoba memahami deep learning dari dasarnya, yaitu dengan membangun model tanpa menggunakan framework.

Metode yang saya gunakan pada saat itu cukup sederhana. Saya meminta AI seperti ChatGPT atau Gemini untuk menghasilkan kode dari algoritma neural network, kemudian saya pelajari kode tersebut baris per baris. Bisa dibilang ini adalah pendekatan *reverse engineering*.

Namun dalam proses tersebut, saya menemukan kesulitan yang cukup besar, terutama ketika mencoba memahami bagian backpropagation. Bukan karena kode yang dihasilkan AI salah, tetapi karena saya sendiri belum memahami fundamental matematika yang digunakan, terutama aljabar linear dan kalkulus.

Saya sempat mencoba menghafal kode tersebut tanpa benar-benar memahami konsep di baliknya. Namun seperti yang bisa diduga, cara tersebut tidak memberikan hasil yang berarti.

Akhirnya saya memutuskan untuk kembali ke dasar, yaitu belajar matematika dari awal. Kebetulan pada saat itu saya sedang mengambil mata kuliah linear algebra, sehingga saya mulai bisa memahami bagaimana proses *feed forward* bekerja dalam neural network.

Untuk kalkulus, karena tidak ada mata kuliah khusus yang saya ambil, saya mempelajarinya secara otodidak. Saya mulai dari konsep yang paling dasar seperti fungsi, limit, turunan, hingga integral. Semua itu saya pelajari dengan tujuan untuk benar-benar memahami bagaimana proses backpropagation bekerja.

Singkat cerita, setelah kurang lebih satu bulan saya fokus mempelajari matematika, saya mulai bisa menghubungkan konsep-konsep tersebut ke dalam implementasi neural network. Saya akhirnya berhasil mengimplementasikan ANN dari nol menggunakan konsep linear algebra dan kalkulus, serta membuat model klasifikasi sederhana.

---

## Penutup

Dari pengalaman tersebut, saya mulai menyadari bahwa memahami sesuatu secara mendalam memang membutuhkan waktu dan proses yang tidak singkat.

Tidak ada jalan instan untuk benar-benar mengerti.

Terkadang kita harus mundur beberapa langkah ke belakang, mempelajari ulang hal-hal dasar, sebelum akhirnya bisa melangkah lebih jauh ke depan.

Namun justru dari proses itulah saya merasa pemahaman yang saya dapatkan menjadi jauh lebih kuat. Bukan hanya sekadar bisa menggunakan, tetapi benar-benar mengerti.

Dan mungkin itulah yang membedakan antara sekadar “menggunakan teknologi” dengan benar-benar “memahami teknologi”.