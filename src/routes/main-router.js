const express = require('express');
const router = express.Router();
const mainController = require ("../controllers/main-controller");


router.get('/', mainController.home)
router.get('/users',mainController.users)


module.exports = router;