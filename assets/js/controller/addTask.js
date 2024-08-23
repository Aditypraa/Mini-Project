// File penghubung antara UI HTML dan Model User

document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");

  const taskManager = new Task();

  // event listener ketika form di submit
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
    };

    const result = taskManager.saveTask(taskData);
    if (result.success) {
      //   window.location.href = "/signin.html";
      alert("Berhasil Menyimpan Data");
    } else {
      alert("Gagal Menyimpan Data");
    }
  });
});
