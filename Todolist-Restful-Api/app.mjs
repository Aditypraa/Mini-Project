import http from "http";
import { TodoListService } from "./todolistService.mjs";

const service = new TodoListService();

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // Jika Request yang Metodnya GET
  if (req.method === "GET") {
    service.getTodoList(req, res);
  } else if (req.method === "POST") {
    service.addTodoList(req, res);
  } else if (req.method === "PUT") {
    service.editTodoList(req, res);
  } else if (req.method === "DELETE") {
    service.deleteTodoList(req, res);
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        code: 405,
        status: "error",
        message: "Method Not Allowed",
      })
    );
  }
});

server.listen(3000);
