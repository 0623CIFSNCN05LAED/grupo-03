const productServices = require("../services/product-services");

module.exports = {
    home: async (req, res) => { 
        const products = await productServices.getAllProducts();
        /*console.log(products);*/
        res.render("products", { products });
    },
    detail: async (req, res) => {
        const id = req.params.id;
        /*const product = await productServices.getFormattedProduct(id);*/
        const product = await productServices.getProduct(id);
        res.render("productDetail", { product });
    },
    create: async (req, res) => {
        const colors = await productServices.getColors();
        const capacities = await productServices.getCapacities();
        res.render("productCreate", { capacities, colors });
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
    search: (req, res) => {
        const keywords = req.query.keywords;
        const foundProducts = productServices.searchProducts(keywords);
        res.render("results", { foundProducts });
      },
};