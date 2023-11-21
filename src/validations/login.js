const { body } = require("express-validator");
const userServices = require("../services/user-services");
const bcrypt = require('bcryptjs');

module.exports = [
    body('email')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isEmail()
        .withMessage("Debe ingresar un email válido")
        .bail()
        .custom(async value => {
            const existingUser = await userServices.getUserEmail(value);
            if (!existingUser) {
              throw new Error('No existe un usuario con ese email');
            }
        }),
    body('contrasena')
        .notEmpty()
        .withMessage("Debe completar este campo")
        .bail()
        .isLength({ min: 3 })
        .isLength({ max: 35 })
        .withMessage("Ingrese una constraseña válida (min:3, max:35)")
        .bail()
        .custom(async (value, { req }) => {
            const existingUser = await userServices.getUserEmail(req.body.email);
            const pass = bcrypt.hashSync(value, 10) ;
            if (!existingUser) {
              throw new Error('No existe un usuario con el email dado');
            } else {
                if (bcrypt.compareSync(value, existingUser.contrasenia) == false) {
                    throw new Error('La contraseña es incorrecta');
                }
            }
        }),
];