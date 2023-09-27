const { Router } = require("express");
const router = Router();

const mainController = require("../controllers/main-controller");


router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/productCart", mainController.productCart);
router.get("/productDetail/:id", mainController.productDetail);

const productsRouter =  require("./products");
router.use("/products", productsRouter);

module.exports = router;