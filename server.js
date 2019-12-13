const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send(`
  <h1>Middle Earth Middleware</h1>
  <h2>User Endpoints</h2>
  <table style="
  width: 600px;
  border: 1px solid black;
  text-align: center;
  ">
    <tr>
      <th>Endpoints</th>
      <th>Request</th>
    </tr>
    <tr>
      <td>/api/users</td>
      <td>GET, POST</td>
    </tr>
    <tr>
      <td>/api/users/:id</td>
      <td>GET, PUT, DELETE</td>
    </tr>
    <tr>
      <td>/api/users/:id/posts</td>
      <td>GET, POST</td>
    </tr>
  </table>
  <h2>Post Endpoints</h2>
  <table style="
  width: 600px;
  border: 1px solid black;
  text-align: center;
  ">
    <tr>
      <th>Endpoints</th>
      <th>Request</th>
    </tr>
    <tr>
      <td>/api/posts</td>
      <td>GET</td>
    </tr>
    <tr>
      <td>/api/posts/:id</td>
      <td>GET, PUT, DELETE</td>
    </tr>
  </table>
  `);
});

//custom middleware

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} - ${req.url}`);
  next();
}

server.use(logger);

module.exports = server;
