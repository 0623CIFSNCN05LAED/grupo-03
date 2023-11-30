const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: function (req, file, cb) {
      cb(null, Math.floor(Math.random() * 1000) + Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
  });

const productsController = require("../controllers/products-controller");

// Recibir todos los productos
router.get("/products", productsController.home);

// Crear un producto
router.get("/products/create", productsController.create);
router.post("/products/store", upload.array("images", 5), productsController.store);

// Editar un producto
router.get("/products/edit/:id", productsController.edit);
router.put("/products/update/:id", productsController.update);

// Eliminar un producto
router.get("/products/delete/:id", productsController.delete);
router.delete("/products/destroy/:id", productsController.destroy);

//Busqueda de productos
router.get("/search", productsController.search);

//CRUD productos
router.get("/products/crud/", productsController.crud);

// Detalle de un producto
router.get("/products/detail/:id/", productsController.detail);


module.exports = router;