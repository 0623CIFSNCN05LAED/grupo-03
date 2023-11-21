const productServices = require("../services/product-services");

module.exports = {
// Root - Show all products
    home: (req, res) => { 
        const products = productServices.getAllProducts();
        res.render("products", { products });
    },
    detail: (req, res) => {
        const id = req.params.id;
        const product = productServices.getFormattedProduct(id);
        res.render("productDetail", { product });
    },
    create: (req, res) => {
        res.render("productCreate");
    },
    store: (req, res) => {
        const ArrayImagenes = req.files.map((file) => `/images/products/${file.filename}`);
        
        const product = {
            brand: req.body.brand,
            name: req.body.name,
            description: req.body.description,
            detail: req.body.detail,
            aditional: req.body.aditional,
            images: req.files ? ArrayImagenes : ["/images/products/default-image.jpg"],
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
        res.render("productEdit", { product });
    },
    update: (req, res) => {
        const product = req.body;
        const id = req.params.id;
        const image = req.file
            ? req.file.filename
            : productServices.getProduct(id).images;
        productServices.updateProduct(id, product);
        res.redirect("/products");
    },
    delete: (req, res) => {
        res.render("productDelete");
    },
    destroy: (req, res) => {
        const id = req.params.id;
        console.log(`deleting product id: ${id}`);
        productServices.deleteProduct(id);
        res.redirect("/products");
    },
};