const productServices = require("../../services/product-services");

module.exports = {

    home: async (req, res) => {

        try {
            const totalProductsCount = await productServices.getCountTotalProducts();
            const totalProducts = await productServices.getAllProducts();
            const { options } = req.query;

            if (options) {
                const last_product = await productServices.getLastProduct();
                console.log("CONTROLLER", last_product)
                const response = {
                    meta: {
                        status: 200,
                        url: `http://localhost:3030/api/products?options=last`
                    },
                    data: last_product,
                }
                res.json(response)
            } else {
                let respuesta = {
                    meta: {
                        status: 200,
                        count: totalProductsCount,
                        countByBrand: {
                            Samsung: totalProducts.filter((product) => product.brand.brand === "Samsung").length,
                            Apple: totalProducts.filter((product) => product.brand.brand === "Apple").length,
                            Motorola: totalProducts.filter((product) => product.brand.brand === "Motorola").length,
                            Oppo: totalProducts.filter((product) => product.brand.brand === "Oppo").length,
                            Huawei: totalProducts.filter((product) => product.brand.brand === "Huawei").length,
                            Xiaomi: totalProducts.filter((product) => product.brand.brand === "Xiaomi").length,
                            Google: totalProducts.filter((product) => product.brand.brand === "Google").length,

                        }
                    },
                    products: totalProducts.map(product => ({
                        id: product.id_product,
                        name: product.name,
                        description: product.description,
                        brand: product.brand,
                        detail: `http://localhost:3030/api/products/${product.id_product}`
                    }))
                };

                return res.json(respuesta);
            }
        }
        catch (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        }
    },

    detail: async (req, res) => {
        const product = await productServices.getProduct(req.params.id);
        const response = {
            meta: {
                status: 200,
                // total: products.length,
                url: `http://localhost:3030/api/products/${req.params.id}`
            },
            data: product
        }
        res.json(response)
    },

};

