const router = Router();
const multer = require("multer");
const path = require("path");

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

  const mainController = require("../controllers/main-controller");
  router.get("/users", mainController.users); //agregada

  const apiUsersController = require("../../controllers/api/api-users-controller");

  router.get("/",apiUsersController.home);

  module.exports = router;