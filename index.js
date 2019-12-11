// code away!
const express = require("express");

const server = require("./server");

const userRouter = require("./users/userRouter");

server.use(express.json());
server.use("/api/users", userRouter);

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
