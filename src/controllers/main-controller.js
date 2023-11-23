const productServices = require("../services/product-services");
const userServices = require("../services/user-services");

module.exports = {
  home: (req, res) => {
    const featuredProducts = productServices.getFeaturedProducts();

    res.render("home", {
      featuredProducts,
    });
  },
  showLogin: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    res.render("login", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  login: (req, res) => {
    const data = req.body;
    console.log(data);
    const email = req.body.email;
    const contrasena = req.body.contrasenia;
    const dataUser = userServices.validateUserLogin(email, contrasena);
    if (dataUser !== null) {
      req.session.userData = dataUser;
      console.log('data session');
    }
    res.redirect("/");
  },
  showRegister: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    res.render("register", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  register: (req, res) => {
    const data = req.body;
    console.log(data);
    req.session.userData = data;

    const imagen = req.file;
/*
    const user = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      usuario: req.body.usuario,
      email: req.body.email,
      contrasenia: req.body.contrasenia,
      images: req.file ? imagen.filename : ["/images/users/default-image.jpg"],
    };*/
    userServices.registerUser(data, imagen);

    res.redirect("/login");
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
};
