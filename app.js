// app.js
import "dotenv/config";
import express from "express";
import "@aikidosec/firewall";

const app = express();
const PORT = 4000;


app.get("/", (req, res) => {
  res.send("Hello from app with firewall-node!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
