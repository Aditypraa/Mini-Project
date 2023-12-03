let tanya = true;

while (tanya) {
  // Menangkap Pilihan PLayer
  let p = prompt("Pilih : gajah, semut, orang");

  // Menangkap Pilihan Komputer
  // Mengenerate Bilangan Random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  let hasil = "";
  // Menentukan Rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    //   if (comp == "orang") {
    //     hasil = "MENANG";
    //   } else {
    //     hasil = "KALAH";
    //   }
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (p == "orang") {
    //   if (comp == "gajah") {
    //     hasil = "KALAH";
    //   } else {
    //     hasil = "MENANG";
    //   }
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "semut") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Memasukan Pilihan Yang Salah!!";
  }

  // Tampilannya Berhasil
  alert(
    `Kamu Memilih ${p} dan Komputer Memilih ${comp}, \nMaka Hasilnya : Kamu ${hasil}`
  );

  tanya = confirm(`Lagi?`);
}

alert(`Terima Kasih Sudah Bermain!`);
