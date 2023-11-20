const { Router, urlencoded } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");

const mainController = require("../controllers/main-controller");
const validationsLogin = require("../validations/login");
const validationsRegister = require("../validations/register");
const validateForm = require("../middlewares/validate-form");
const validateFormRegister = require("../middlewares/validate-form-register");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/users"),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

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
  /*upload.single("images"),*/
  urlencoded({
    extended: false,
  }),
  validationsRegister,
  validateFormRegister,
  upload.single("images"),
  mainController.register
);
router.get("/productCart", mainController.productCart);
router.get("/search", mainController.search);

const productsRouter = require("./products");
router.use("/products", productsRouter);

module.exports = router;
