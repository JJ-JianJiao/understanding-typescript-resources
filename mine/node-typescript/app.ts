// import { createServer } from "node:http";

// const server = createServer((req, res) => {
//   console.log(req.method);
//   res.end("hello world");
// });

// server.listen(3000);

import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todo.js";

const app = express();
// app.get("/", (req, res) => {
//   console.log(req.method);
//   res.json({ message: "Hello world!" });
// });
app.use(express.json());

app.use(todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "An error occurred!" });
});

app.listen(3000);
