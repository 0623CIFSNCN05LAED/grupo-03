const productServices = require("../services/product-services");
const userServices = require("../services/user-services");


module.exports = {
  home: async (req, res) => {
    productServices.getFeaturedProducts().then((products) => {

      // res.json (product)
      return res.render("./home", { featuredProducts: products });

    });
  },

  //agregado
  users: async (req, res) => {
    userServices.getAllUsers().then((users) => {
      res.json(users)
      // return res.render("/users", { getAllUsers: users });
    });
  },

  //carrito de compras
  productCart: (req, res) => {
    res.render("productCart");
  },

}