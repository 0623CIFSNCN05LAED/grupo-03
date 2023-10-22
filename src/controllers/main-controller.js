const productServices = require("../services/product-services");

module.exports = {
  home: (req, res) => {
    const featuredProducts = productServices.getFeaturedProducts();

    res.render("home", {
      featuredProducts,
    });
  },
  showLogin: (req, res) => {
    res.render("login");
  },
  login: (req, res) => {
    const data = req.body;
    console.log(data);
    req.session.userData = data;
    res.redirect("/");
  },
  showRegister: (req, res) => {
    console.log("req", req);
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
    res.redirect("/login");
  },
  /*
    register: (req, res) => {
        res.render("register");
    },*/
  productCart: (req, res) => {
    res.render("productCart");
  },
  search: (req, res) => {
    const keywords = req.query.keywords;
    const foundProducts = productServices.searchProducts(keywords);
    res.render("results", { foundProducts });
  },
};