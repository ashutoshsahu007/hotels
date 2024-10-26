const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("App Running successfully 2 ");
});

app.listen(3000, () => {
  console.log("port 3000");
});

//comment adding for testing purpose
