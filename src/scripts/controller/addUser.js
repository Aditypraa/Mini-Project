// File penghubung antara UI HTML dan Model User

document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm"); // mengambil element id userForm di add-user.html

  const userManager = new User(); // instance object dari class User

  // event listener ketika form di submit
  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const userData = {
      username: document.getElementById("username").value, // mengambil value dari input id username di add-user.html
    };

    const result = userManager.saveUser(userData); // memanggil method saveUser dari object userManager
    if (result.success) {
      window.location.href = "/src/signin.html";
    } else {
      alert("Gagal Menyimpan Data");
    }
  });
});
