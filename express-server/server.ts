import cors from "cors";
import express from "express";

const app = express();
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
import Knex from "knex";
import { User } from "./model";

const knexConfig = require("./knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);

const PORT = 8080;

// import { TodoController } from "./controllers/TodoController";
// import { TodoService } from "./services/TodoService";

// import { UserController } from "./controllers/UserController";
// import { UserService } from "./services/UserService";
// import { User } from "./model";


// const todoService = new TodoService(knex);
// const todoController = new TodoController(todoService);

// export const userService = new UserService(knex);
// const userController = new UserController(userService);

app.get("/hi", (req, res) => {
  res.send("bye");
});

// app.use("/todo", todoController.router);
// app.use("/auth", userController.router);


app.post("/upload", async (req, res) => {

});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
