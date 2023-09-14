const path = require("path");
const express = require("express");
const app = express();
const mainRouter = require("./routes/main-router");

app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(mainRouter);