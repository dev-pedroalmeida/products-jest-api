const express = require("express");
const bodyParser = require("body-parser");

const PORT = 3333;
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
