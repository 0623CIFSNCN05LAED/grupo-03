const { body } = require("express-validator");
const userServices = require("../services/user-services");

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
        .withMessage("Ingrese un usuario válido (min:3, max:35)")
        .bail()
        .custom(async value => {
            const existingUser = await userServices.getUsername(value);
            if (existingUser) {
              throw new Error('Nombre de usuario no disponible');
            }
        }),
    body('email')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isEmail()
        .withMessage("Debe ingresar un email válido")
        .bail()
        .custom(async value => {
            const existingUser = await userServices.getUserEmail(value);
            if (existingUser) {
              throw new Error('Ya existe un usuario con ese email');
            }
        }),
    body('contraseña')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isLength({ min: 3 })
        .isLength({ max: 35 })
        .withMessage("Ingrese una constraseña válida (min:3, max:35)"),
    body('contraseña2')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .custom((value, { req }) => {
        return value === req.body.contraseña})
        .withMessage("La contraseña no coincide"),
];