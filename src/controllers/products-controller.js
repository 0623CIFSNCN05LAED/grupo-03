const productServices = require("../services/product-services");

module.exports = {
    home: async (req, res) => { 
        const products = await productServices.getAllProducts();
        res.render("products", { products });
    },
    detail: async (req, res) => {
        const id = req.params.id;
        const product = await productServices.getProduct(id);
        res.render("productDetail", { product });
    },
    create: async (req, res) => {
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        const colors = await productServices.getColors();
        const capacities = await productServices.getCapacities();
        const brands = await productServices.getBrands();
        req.session.errors = null;
        req.session.oldData = null;
        res.render("productCreate", {
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null,
            capacities, colors, brands
        });
    },
    store: (req, res) => {
        const ArrayImagenes = req.files.map((file) => `/images/products/${file.filename}`);
        
        const product = {
            brand: req.body.brand,
            name: req.body.name,
            description: req.body.description,
            featured_desc: req.body.featured_desc,
            images: req.files ? ArrayImagenes : ["/images/products/default-image.jpg"],
            featured: req.body.featured,
            price: req.body.price,
            discount: req.body.discount,
            rating: req.body.rating,
            colors: req.body.color,
            capacity: req.body.capacity,
            os: req.body.os,
            screen: req.body.screen,
            camera: req.body.camera
        };
        productServices.createProduct(product);
        res.redirect("/products/crud");
    },
    edit: async (req, res) => {
        const errors = req.session.errors;
        const oldData = req.session.oldData;
        const id = req.params.id;
        const product = await productServices.getProductNoFormat(id);
        req.session.errors = null;
        req.session.oldData = null;
        res.render("productEdit", {
            errors: errors ? errors : null,
            oldData: oldData ? oldData : null,
            id, product
        });
    },
    update: (req, res) => {
        const product = {
            name: req.body.name,
            description: req.body.description,
            featured_desc: req.body.featured_desc,
            featured: req.body.featured,
            price: req.body.price,
            discount: req.body.discount,
            rating: req.body.rating,
            os: req.body.os,
            screen: req.body.screen,
            camera: req.body.camera
        };
        const id = req.params.id;
        productServices.updateProduct(id, product);
        res.redirect("/products/crud");
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const product = await productServices.getProductNoFormat(id);
        res.render("productDelete", { id, product });
    },
    destroy: async (req, res) => {
        const id = req.params.id;
        const product = await productServices.getProductNoFormat(id);
        await productServices.deleteProduct(id, product);
        res.redirect("/products/crud");
    },
    search: (req, res) => {
        const keywords = req.query.keywords;
        const foundProducts = productServices.searchProducts(keywords);
        res.render("results", { foundProducts });
    },
    crud: async (req, res) => {
        const products = await productServices.getAllProducts();
        res.render("productCRUD", { products });
    },
};