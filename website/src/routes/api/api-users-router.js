const { Router, urlencoded } = require("express");
const express = require("express");
const router = express.Router();
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

  const apiUsersController = require("../../controllers/api/api-users-controller");

  router.get("/",apiUsersController.users);
  router.get("/:id",apiUsersController.detail);
  // router.get("/last",apiUsersController.lastUser);

  module.exports = router;