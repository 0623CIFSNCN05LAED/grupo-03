const path = require("path");

const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
  });