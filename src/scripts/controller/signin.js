// File penghubung antara UI HTML dan Model User

document.addEventListener("DOMContentLoaded", function () {
  const userForm = document.getElementById("userForm"); // mengambil element id userForm di add-user.html

  const userManager = new User(); // instance object dari class User

  // event listener ketika form di submit
  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameByInput = document.getElementById("username").value; // mengambil value dari input id username di add-user.html

    const result = userManager.signInUser(usernameByInput); // memanggil method saveUser dari object userManager
    if (result.success) {
      localStorage.setItem("usernameLoggin", usernameByInput);
      window.location.href = "/src/tasks.html";
    } else {
      alert(result.message);
    }
  });
});
