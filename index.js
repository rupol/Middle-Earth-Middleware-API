// code away!
const express = require("express");

const server = require("./server");

const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

server.use(express.json());

server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.use((req, res) => {
  res.status(404).json({
    message: "Route was not found"
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An internal error occurred, please try again later"
  });
});

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
