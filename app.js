const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/index.html"));
})

app.get("/detalleDelProducto", (req, res) => {
   return res.sendFile(path.join(__dirname, "/views/productDetail.html"));
})

app.listen(3030, () => console.log("corriendo en el puerto 3030"));

app.use(express.static("public"));