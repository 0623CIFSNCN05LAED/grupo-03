const productServices = require("../services/product-services");

module.exports = {
    home: (req, res) => {
        const featuredProducts = productServices.getFeaturedProducts();

        res.render("home", {
            featuredProducts,
        });
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    search: (req, res) => {
        const keywords = req.query.keywords;
        const foundProducts = productServices.searchProducts(keywords);
        res.render("results", { foundProducts });
    },
}; 