let quizData = [
  {
    question: "Apa yang dimaksud dengan HTML?",
    a: "Hypertext Markup Language",
    b: "High-Level Text Markup Language",
    c: "Hyperlink and Text Markup Language",
    d: "Home Tool Markup Language",
    correct: "a",
  },
  {
    question: "Apa singkatan CSS?",
    a: "Computer Style Sheet",
    b: "Cascading Style Sheet",
    c: "Colorful Style Sheet",
    d: "Creative Style Sheet",
    correct: "b",
  },
  {
    question: "Apa yang dimaksud dengan JavaScript?",
    a: "Bahasa pemrograman untuk mengatur tata letak halaman web",
    b: "Bahasa pemrograman untuk mengatur warna halaman web",
    c: "Bahasa pemrograman untuk membuat animasi halaman web",
    d: "Bahasa pemrograman untuk membuat halaman web interaktif",
    correct: "d",
  },
  {
    question: "Apa fungsi utama dari HTML?",
    a: "Mengatur tampilan halaman web",
    b: "Mengatur logika bisnis pada halaman web",
    c: "Mengatur interaksi pengguna pada halaman web",
    d: "Mengatur struktur dan konten halaman web",
    correct: "d",
  },
  {
    question: "Apa singkatan API?",
    a: "Application Programming Interface",
    b: "Advanced Programming Interface",
    c: "Application Program Interface",
    d: "Advanced Program Interface",
    correct: "a",
  },
  {
    question: "Apa itu looping dalam pemrograman?",
    a: "Menjalankan program secara berulang",
    b: "Menggambar bentuk-bentuk dalam program",
    c: "Mengatur tata letak halaman web",
    d: "Menggunakan API dalam program",
    correct: "a",
  },
  {
    question: "Apa yang dimaksud dengan debugging?",
    a: "Proses membuat program dari awal",
    b: "Proses menghapus program",
    c: "Proses mencari dan memperbaiki kesalahan dalam program",
    d: "Proses mengatur tampilan program",
    correct: "c",
  },
  {
    question: "Apa singkatan SQL?",
    a: "Structured Query Language",
    b: "Structured Question Language",
    c: "Simple Query Language",
    d: "System Query Language",
    correct: "a",
  },
  {
    question: "Apa yang dimaksud dengan Git?",
    a: "Bahasa pemrograman populer",
    b: "Sistem manajemen basis data",
    c: "Sistem kontrol versi yang digunakan dalam pengembangan perangkat lunak",
    d: "Bahasa markup untuk mengatur tampilan web",
    correct: "c",
  },
  {
    question: "Apa itu URL?",
    a: "Uniform Resource Locator",
    b: "Universal Resource Locator",
    c: "Uniform Resource Link",
    d: "Universal Resource Link",
    correct: "a",
  },
  {
    question: "Apa yang dimaksud dengan OOP?",
    a: "Object-Oriented Programming",
    b: "Object-Oriented Process",
    c: "Object-Oriented Protocol",
    d: "Object-Oriented Project",
    correct: "a",
  },
  {
    question: "Apa itu syntax error?",
    a: "Kesalahan dalam logika program",
    b: "Kesalahan dalam penamaan variabel",
    c: "Kesalahan dalam penulisan kode program",
    d: "Kesalahan dalam tampilan halaman web",
    correct: "c",
  },
  {
    question: "Apa yang dimaksud dengan API RESTful?",
    a: "Metode untuk mereset program",
    b: "Metode untuk mengatur tampilan halaman web",
    c: "Arsitektur berbasis HTTP untuk mengakses dan mengelola data",
    d: "Bahasa pemrograman untuk mengakses data",
    correct: "c",
  },
  {
    question: "Apa singkatan IDE?",
    a: "Integrated Development Environment",
    b: "Interactive Development Environment",
    c: "Integrated Design Environment",
    d: "Interactive Design Environment",
    correct: "a",
  },
  {
    question: "Apa yang dimaksud dengan front-end development?",
    a: "Pengembangan sisi server",
    b: "Pengembangan tampilan dan interaksi pengguna",
    c: "Pengembangan aplikasi mobile",
    d: "Pengembangan basis data",
    correct: "b",
  },
  {
    question: "Apa itu kompilasi dalam pemrograman?",
    a: "Proses menghapus kode program",
    b: "Proses menerjemahkan kode program ke bahasa mesin",
    c: "Proses mencari bug dalam kode program",
    d: "Proses menggabungkan beberapa program menjadi satu",
    correct: "b",
  },
  {
    question: "Apa yang dimaksud dengan framework?",
    a: "Bahasa pemrograman",
    b: "Struktur kerja yang telah dibuat untuk mempermudah pengembangan aplikasi",
    c: "Sistem operasi",
    d: "Sistem manajemen basis data",
    correct: "b",
  },
  {
    question: "Apa yang dimaksud dengan algorithm?",
    a: "Bahasa pemrograman",
    b: "Sistem manajemen basis data",
    c: "Urutan langkah-langkah yang diperlukan untuk menyelesaikan suatu masalah",
    d: "Struktur data",
    correct: "c",
  },
  {
    question: "Apa itu cloud computing?",
    a: "Menggunakan komputer tanpa koneksi internet",
    b: "Penyimpanan data di komputer lokal",
    c: "Penggunaan sumber daya komputer melalui jaringan internet",
    d: "Menggunakan komputer berbasis awan (cloud)",
    correct: "c",
  },
  {
    question: "Apa yang dimaksud dengan Docker?",
    a: "Kontainerisasi aplikasi",
    b: "Alat untuk menggambar grafik",
    c: "Jenis bahasa pemrograman",
    d: "Sistem manajemen basis data",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerElement = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const buttonSubmit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElement.forEach((answer) => (answer.checked = false));
};

const getSelected = (answer) => {
  answerElement.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

buttonSubmit.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;

    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `<h4 class="card-title text-center mb-4" id="question">Kamu Menjawab ${score}/${quizData.length} Pertanyaan Yang Benar</h4>
      <button class="btn btn-primary d-block mx-auto"; style="width:max-content"; onclick="history.go(0)">
      Main Lagi
      </button>`;

      buttonSubmit.classList.add("d-none");
    }
  }
});
