const productServices = require("../services/product-services");

module.exports = {
// Root - Show all products
    home: (req, res) => { 
        const products = productServices.getAllProducts();
        res.render("products", { products });
    },
    create: (req, res) => {
        res.render("productCreation");
    },
    store: (req, res) => {
        const product = req.body;
        res.redirect("/products");
    },
};