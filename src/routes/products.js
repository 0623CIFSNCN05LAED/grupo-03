const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

// Recibir todos los productos
router.get('/', productsController.home);

// Detalle de un producto

// Crear un producto
router.get('/create/', productsController.create);
router.post('/', productsController.store);




module.exports = router;