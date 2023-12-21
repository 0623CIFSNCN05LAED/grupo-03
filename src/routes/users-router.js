const { Router, urlencoded } = require("express");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const mainController = require("../controllers/main-controller");
const userController = require("../controllers/users-controller");
const validationsLogin = require("../validations/login");
const validationsRegister = require("../validations/register");
const validateForm = require("../middlewares/validate-form");
const validateFormRegister = require("../middlewares/validate-form-register");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/users"),
  filename: function (req, file, cb) {
    cb(
      null,
      Math.floor(Math.random() * 1000) + Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({
  storage: storage,
});

router.get("/", mainController.home);
router.get("/users", mainController.users); //agregada
router.get("/login", userController.showLogin);
router.post(
  "/login",
  urlencoded({
    extended: false,
  }),
  validationsLogin,
  validateForm,
  userController.login
);
router.get("/register", userController.showRegister);
router.post(
  "/register",
  upload.single("profile_picture"),
  validationsRegister,
  validateFormRegister,
  userController.register
);
// router.get("/productCart", mainController.productCart);

// const productsRouter = require("./products-router");
// router.use("/products", productsRouter);

module.exports = router;
