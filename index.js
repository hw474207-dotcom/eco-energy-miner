const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App Running 🚀");
});

app.listen(3000);
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Eco Energy Miner App is Live 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
