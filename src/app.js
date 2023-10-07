const path = require("path");
const express = require("express");
const methodOverride = require ("method-override");


const viewUtils = require("./utils/view-utils");

const app = express();

app.use(express.static(path.join(__dirname, "../public"))); //// Necesario para los archivos estáticos en el folder /public
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.set("view engine", "ejs");
app.set("views", "./src/views");

const mainRouter = require("./routes/main-router"); // Rutas main
app.use("/", mainRouter);


const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});