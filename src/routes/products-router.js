const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const validationsCreate = require("../validations/productCreate");
const validateFormCreate = require("../middlewares/validate-form-create");
const validationsEdit = require("../validations/productEdit");
const validateFormEdit = require("../middlewares/validate-form-edit");
const adminGuard = require("../middlewares/admin-guard");


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
router.get("/products/create", adminGuard, productsController.create);
router.post(
  "/products/store", 
  adminGuard,
  upload.array("images", 5),
  validationsCreate,
  validateFormCreate,
  productsController.store);

// Editar un producto
router.get("/products/edit/:id", adminGuard, productsController.edit);
router.put(
  "/products/update/:id",
  adminGuard,
  validationsEdit,
  validateFormEdit,
  productsController.update);

// Eliminar un producto
router.get("/products/delete/:id", adminGuard, productsController.delete);
router.delete("/products/destroy/:id", adminGuard, productsController.destroy);

//Busqueda de productos
router.get("/search", productsController.search);

//CRUD productos
router.get("/products/crud/", adminGuard, productsController.crud);

// Productos favoritos
/*router.get("/products/favorites",productsController.favoritesProducts);*/

//logout
router.post("/logout", productsController.logout);

// Detalle de un producto
router.get("/products/detail/:id/", productsController.detail);


module.exports = router;