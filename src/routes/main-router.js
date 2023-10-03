const { Router, urlencoded } = require("express");
const router = Router();

const mainController = require("../controllers/main-controller");
const validationsLogin = require("../validations/login");
const validationsRegister = require("../validations/register");
const validateForm = require("../middlewares/validate-form");
const validateFormRegister = require("../middlewares/validate-form-register");

router.get("/", mainController.home);
router.get("/login", mainController.showLogin);
router.post(
    "/login",
    urlencoded({
        extended: false,
    }),
    validationsLogin,
    validateForm,
    mainController.login
);
router.get("/register", mainController.showRegister);
router.post(
    "/register",
    urlencoded({
        extended: false,
    }),
    validationsRegister,
    validateFormRegister,
    mainController.register
);
/*router.get("/register", mainController.register);*/
router.get("/productCart", mainController.productCart);
router.get("/search", mainController.search);

const productsRouter =  require("./products");
router.use("/products", productsRouter);

module.exports = router;