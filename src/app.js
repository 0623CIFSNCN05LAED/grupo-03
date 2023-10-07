const createError = require ("http-errors");
const cookieParser = require ("cookie-parser");
const express = require("express");
const logger = require ("morgan");
const path = require("path");
const methodOverride = require ("method-override");


const viewUtils = require("./utils/view-utils");

const app = express();


// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, "../public"))); //// Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


// ************ Template Engine - (don't touch) ************
app.set("view engine", "ejs");
app.set("views", "./src/views"); // Define la ubicación de la carpeta de las Vistas

// ************ Route System require and use() ************

const mainRouter = require("./routes/main-router"); // Rutas main
app.use("/", mainRouter);

// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//const productsRouter = require ("./routes/products");
//app.use("/products", productsRouter);


app.locals = viewUtils;

// ************ exports app - dont'touch ************
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});