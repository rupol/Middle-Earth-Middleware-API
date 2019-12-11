// code away!
const express = require("express");

const server = require("./server");

const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");

server.use(express.json());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
