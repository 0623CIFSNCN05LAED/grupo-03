const productServices = require("../services/product-services");
const userServices = require("../services/user-services");


module.exports = {
  home: async (req, res) => {
    productServices.getFeaturedProducts().then((products) => {
      return res.render("./home", { featuredProducts: products });
    });
  },
  users: async (req, res) => {
    userServices.getAllUsers().then((users) => {
      return res.render("/users", { getAllUsers: users });
    });
  },
  productCart: (req, res) => {
    res.render("productCart");
  },
}