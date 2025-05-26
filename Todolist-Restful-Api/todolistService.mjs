export class TodoListService {
  todolist = ["Bang", "Jangan", "Bang"]; // Untuk Menyimpan daftar Todo List

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "success",
      data: this.todolist.map((item, index) => {
        return {
          id: index,
          todo: item,
        };
      }),
    });
  }

  // Method Untuk Mengambil Daftar Todo List
  getTodoList(req, res) {
    res.write(this.getJsonTodoList());
    res.end();
  }

  // Method Untuk Menambahkan Daftar Todo List
  addTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todolist.push(body.todo);

      res.write(this.getJsonTodoList());
      res.end();
    });
  }

  // Method Untuk Edit Daftar Todo List
  editTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolist[body.id]) {
        this.todolist[body.id] = body.todo;
      }

      res.write(this.getJsonTodoList());
      res.end();
    });
  }

  // Method Untuk Menghapus Daftar Todo List
  deleteTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());

      // Jika todo list dengan id yang diberikan Oleh Body ada
      if (this.todolist[body.id]) {
        // Maka Hapus Todo List Tersebut
        this.todolist.splice(body.id, 1);
      }

      res.write(this.getJsonTodoList());
      res.end();
    });
  }
}
