const { body } = require("express-validator");

module.exports = [
    body('nombre')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isLength({ min: 3 })
        .isLength({ max: 35 })
        .withMessage("Ingrese un nombre válido (min:3, max:35)")
        .bail()
        .isAlpha()
        .withMessage("El nombre solo puede contener letras"),
    body('apellido')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isLength({ min: 3 })
        .isLength({ max: 35 })
        .withMessage("Ingrese un apellido válido (min:3, max:35)")
        .bail()
        .isAlpha()
        .withMessage("El apellido solo puede contener letras"),
    body('usuario')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isLength({ min: 3 })
        .isLength({ max: 35 })
        .withMessage("Ingrese un usuario válido (min:3, max:35)"),
    body('email')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isEmail()
        .withMessage("Debe ingresar un email válido"),
    body('contraseña')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isLength({ min: 3 })
        .isLength({ max: 35 })
        .withMessage("Ingrese una constraseña válido (min:3, max:35)"),
    body('contraseña2')
        .custom((value, { req }) => {
        return value === req.body.password}),
];