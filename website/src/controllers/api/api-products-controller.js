const productServices = require("../../services/product-services");

module.exports = {

    home: async (req, res) => {

        try {
            const pageSize = 10;
            const page = req.query.page || 1;
            const totalProductsCount = await productServices.getCountTotalProducts();
            const offset = (page - 1) * pageSize;
            const totalProducts = await productServices.getAllProducts();
            const allProducts = await productServices.getProductsLimit(
                offset,
                pageSize
            );
            const Brands = await productServices.getBrands();

            function countProductsByBrand(allProducts) {
                const prodsByBrand = {};
                allProducts.forEach((product) => {
                    const brand = product.id_brand;
                    if (!prodsByBrand[brand]) {
                        prodsByBrand[brand] = 1;
                    } else {
                        prodsByBrand[brand] += 1;
                    }
                });
                return prodsByBrand;
            }

            const productsToApi = allProducts.map(
                ({ id_product, name, description, brand }) => ({
                    id_product,
                    name,
                    description,
                    brands: [{ brand: brand }],
                    detail: req.headers.host + "/api/products/" + id_product,
                })
            );


            let respuesta = {
                meta: {
                    status: 200,
                    count: totalProductsCount,
                    countByBrand: Brands,
                    url: req.headers.host + req.originalUrl,
                },
                products: productsToApi,
            };

            res.json(respuesta);
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

    last_product: async (req, res) => {
        const last_product = await productServices.getLastProduct();
        console.log("CONTROLLER", last_product)
        const response = {
            meta: {
                status: 200,
                url: `http://localhost:3030/api/products/last`
            },
            data: {
                name: last_product.name,
                brand: last_product.brand.brand,
                created_at_: new Date(last_product.created_at)
            },
        }
        res.json(response)
    },

    brands: async (req, res) => {

        try {
            const brands = await productServices.getBrands();
            const allProducts = await productServices.getProductsLimit(
                offset,
                pageSize
            );

            function countProductsByBrand(allProducts) {
                const prodsByBrand = {};
                allProducts.forEach((product) => {
                    const brand = product.id_brand;
                    if (!prodsByBrand[brand]) {
                        prodsByBrand[brand] = 1;
                    } else {
                        prodsByBrand[brand] += 1;
                    }
                });
                return prodsByBrand;
            }

            const productsToApi = allProducts.map(
                ({ id_product, name, brand }) => ({
                    id_product,
                    name,
                    // description,
                    brands: [{ brand: brand }],
                    // detail: req.headers.host + "/api/products/" + id_product,
                })
            );


            let respuesta = {
                meta: {
                    status: 200,
                    count: totalProductsCount,
                    countByBrand: Brands,
                    url: req.headers.host + req.originalUrl,
                },
                products: productsToApi,
            };

            res.json(respuesta);
        }
        catch (error) {
            res.status(500).json({ error: "Error al obtener los productos" });
        }
    }
}
