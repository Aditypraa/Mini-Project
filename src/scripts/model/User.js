// File User.js digunakan untuk mengurus business Logic
// file ini digunakan untuk mengelola Data seperti CRUD

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(), // generate id Integer dari waktu saat ini
      ...userData, // spread operator
    };

    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    // return (window.location.href = "/signin.html");
    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    // Proses Pengecekkan
    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExists) {
      // Proses Pengembalian data ke signin.js controller
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "Username Belum Terdaftar",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
