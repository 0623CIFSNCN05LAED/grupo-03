const createError = require ("http-errors");
const cookieParser = require ("cookie-parser");
const express = require("express");
const logger = require ("morgan");
const path = require("path");
const methodOverride = require ("method-override");
const session = require("express-session");

const app = express();

// ************ Middlewares ************
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(session({
    secret: "grupo3",
    resave: false,
    saveUninitialized: false,
}));


// ************ Template Engine ************
app.set("view engine", "ejs");
app.set("views", "./src/views"); 

// ************ Route System require and use() ************

const mainRouter = require("./routes/main-router"); // Rutas main
app.use(mainRouter);

const productsRoutes = require("./routes/products-router"); // Rutas products
app.use(productsRoutes);

const usersRoutes = require("./routes/users-router"); // Rutas usuarios
app.use(usersRoutes);

const productsRoutesApi = require("./routes/api/api-products-router"); //Rutas para API de products
app.use("/api/products", productsRoutesApi);

// const usersRoutesApi = require("./routes/api/api-users-router"); //Rutas para API de users
// app.use("/api/users",usersRoutesApi);

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


// ************ exports app ************
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});