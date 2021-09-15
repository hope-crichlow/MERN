// 1. IMPORT EXPRESS, CREATE INSTANCE OF EXPRESS SERVER, AND DEFINE PORT
const express = require("express");
const app = express();
const port = 8000;

// 2. CONFIGURATION FOR YOUR EXPRESS SERVER
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3. DEFINE ROUTES FOR YOUR EXPRESS SERVER


// 4. RUN YOUR EXPRESS SERVER
app.listen(port, () => console.log("EPRESS SERVER RUNNING ON PORT: " + port));
