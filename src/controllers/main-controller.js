const mainServices = require("../services/main-services");

module.exports = {
    home: (req, res) => {
        res.render("home", {
            celulares: mainServices.celulares,
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
        const celular = mainServices.encontrarCelular(id);

        if (!celular) {
            return res.redirect("/");
        }

        res.render("productDetail", {
            celular,
        });
    },
    productCreation: (req, res) => {
        res.render("productCreation");
    }
}; 