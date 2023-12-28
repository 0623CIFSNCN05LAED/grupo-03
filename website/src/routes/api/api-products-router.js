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

const apiProductsController = require("../../controllers/api/api-products-controller");

router.get("/",apiProductsController.home);
router.get("/:id",apiProductsController.detail);

module.exports = router;