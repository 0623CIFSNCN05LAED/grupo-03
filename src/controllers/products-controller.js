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
        const product = {
            brand: req.body.brand,
            name: req.body.name,
            description: req.body.description,
            detail: req.body.detail,
            aditional: req.body.aditional,
            images: req.file ? req.file.filename : "default-image.jpg",
            category: req.body.category,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            rating: Number(req.body.rating),
            colors: req.body.colors,
            capacity: req.body.capacity,
            os: req.body.os,
            screen: req.body.screen,
            camera: req.body.camera
        };
        productServices.createProduct(product);
        res.redirect("/products");
    },
    edit: (req, res) => {
        const id = req.params.id;
        const product = productServices.getProduct(id);
        res.render("productEdition", { product });
    },
    update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        productServices.updateProduct(id, product);
        res.redirect("/products");
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log(`deleting product id: ${id}`);
        productServices.deleteProduct(id);
        res.redirect("/products");
    },
};