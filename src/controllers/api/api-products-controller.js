const productServices = require("../../services/product-services");

const pageSize = 2

module.exports = {

    home: async (req, res) => {
        // const products = await productServices.getAllProductsAndCount();
        // res.render("products", { products });

        const page = Number(req.query.page)||1;
        const offset = (page - 1) * pageSize;


        const{count,rows} = await productServices.getAllProductsAndCount({
            page, offset
        });
        res.json({
            meta: {
                status: 200,
                total: count,
                url: req.originalUrl,
            },
            data: rows
        })
    },
    // create: async (req, res) => {
    //     const products = await productServices.productCreate(req.body);
    //     const colors = await productServices.getColors();
    //     const capacities = await productServices.getCapacities();
    //     const brands = await productServices.getBrands();
    //     res.render("productCreate", { capacities, colors, brands });
    //     res.json({
    //         meta: {
    //             status: 201,
    //             url: req.originalUrl,
    //         },
    //         data: products,
    //     });
    // },

    // destroy: async (req, res) => {
    //     const id = req.params.id;
    //     const product = await productServices.getProductNoFormat(id);
    //     await productServices.deleteProduct(id, product);
    //     res.redirect("/products/crud");
    //     res.json({
    //         meta: {
    //             status: 200,
    //             url: req.originalUrl,
    //         },
    //     });
    // },
};