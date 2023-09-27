const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

// Recibir todos los productos
router.get('/', productsController.home);

// Detalle de un producto
router.get("/:id/", productsController.detail);

// Crear un producto
router.get('/create/', productsController.create);
router.post('/', productsController.store);

// Editar un producto
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);

// Eliminar un producto
router.delete("/:id", productsController.destroy);


module.exports = router;