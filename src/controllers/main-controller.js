const productServices = require("../services/product-services");

module.exports = {
    home: (req, res) => {
        const featuredProducts = productServices.getFeaturedProducts();

        res.render("home", {
            featuredProducts,
        });
    },
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        const id = req.params.id;
        const celular = productServices.encontrarCelular(id);

        if (!celular) {
            return res.redirect("/");
        }

        res.render("productDetail", {
            celular,
        });
    },
}; 