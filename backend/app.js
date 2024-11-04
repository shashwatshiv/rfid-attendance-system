const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send({ hello: "whjro" });
});
app.listen(3000, () => {
  console.log("server running");
});
