const { body } = require("express-validator");

module.exports = [
    body('email')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isEmail()
        .withMessage("Debe ingresar un email válido"),
    body('contrasena')
        .notEmpty()
        .withMessage("Debe completar este campo"),
];