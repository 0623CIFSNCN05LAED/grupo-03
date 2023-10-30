const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({
    storage: storage,
  });

const productsController = require("../controllers/products-controller");

// Recibir todos los productos
router.get("/", productsController.home);

// Crear un producto
router.get("/create/", productsController.create);
router.post("/", upload.single("images"), productsController.store);

// Editar un producto
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);

// Eliminar un producto
router.get("/delete/:id", productsController.delete);
router.delete("/:id", productsController.destroy);

// Detalle de un producto
router.get("/:id/", productsController.detail);


module.exports = router;