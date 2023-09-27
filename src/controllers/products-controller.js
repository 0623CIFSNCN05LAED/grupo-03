const productServices = require("../services/product-services");

module.exports = {
// Root - Show all products
    home: (req, res) => { 
        const products = productServices.getAllProducts();
        res.render("products", { products });
    },
    detail: (req, res) => {
        const id = req.params.id;
        const product = productServices.getProduct(id);
        res.render("productDetail", { product });
    },
    create: (req, res) => {
        res.render("productCreation");
    },
    store: (req, res) => {
        const product = req.body;
        console.log(product);
        res.redirect("/products");
    },
    edit: (req, res) => {
        const id = req.params.id;
        const product = productServices.getProduct(id);
        res.render("productCreation", { product });
    },
    update: (req, res) => {
        const product = req.body;
        console.log(product);
        res.redirect("/products");
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log(`deleting product id: ${id}`);
        res.redirect("/products");
    },
};