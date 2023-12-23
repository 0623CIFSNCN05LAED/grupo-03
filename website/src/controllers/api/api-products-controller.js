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

            // const totalPages = Math.ceil(totalProductsCount / pageSize);

            function countProductsByBrand(allProducts) {
                const prodsByBrand = {};
                allProducts.forEach((product) => {
                    const brand = product.brand_id;
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
                    // countProductsByBrand(totalProducts)
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
                total: product.length,
                url: "/api/products/:id"
            },
            data: {
                id_product: product.id_product,
                name: product.name,
                description: product.description,
                featured_desc: product.featured_desc,
                featured: product.featured,
                price: product.price,
                priceWithDiscount: product.priceWithDiscount,
                discount: product.discount,
                rating: product.rating,
                os: product.os,
                screen: product.screen,
                camera: product.camera,
                id_brand: product.id_brand,
                brand: product.brand,
                image: product.image.map((image) => {
                    return {
                        id_image: image.id_image,
                        url_image: "localhost:3030" + image.url_image,
                    };
                }),
                colors: product.colors.map((color) => {
                    return {
                        id_color: color.id_color,
                        color: color.color,
                    };
                }),
                capacities: product.capacities.map((capacity) => {
                    return {
                        id_capacity: capacity.id_capacity,
                        capacity: capacity.capacity,
                    };
                }),
            }
        }
        res.json(response)
    }

};

