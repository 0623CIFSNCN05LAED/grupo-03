const { body } = require("express-validator");
const userServices = require("../services/user-services");

module.exports = [
  body("name")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 3 })
    .isLength({ max: 35 })
    .withMessage("Ingrese un nombre válido (min:3, max:35)")
    .bail()
    .isAlpha()
    .withMessage("El nombre solo puede contener letras"),
  body("last_name")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 3 })
    .isLength({ max: 35 })
    .withMessage("Ingrese un apellido válido (min:3, max:35)")
    .bail()
    .isAlpha()
    .withMessage("El apellido solo puede contener letras"),
  body("username")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 3 })
    .isLength({ max: 20 })
    .withMessage("Ingrese un usuario válido (min:3, max:20)")
    .bail()
    .custom(async (value) => {
      const existingUser = await userServices.findByUsername(value);
      if (existingUser) {
        throw new Error("Nombre de usuario no disponible");
      }
    }),
  body("email")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email válido")
    .bail()
    .custom(async (value) => {
      const existingUser = await userServices.findByEmail(value);
      if (existingUser) {
        throw new Error("Ya existe un usuario con ese email");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 8 })
    .isLength({ max: 30 })
    .withMessage("Ingrese una constraseña válida (min:8, max:30)")
    .bail()
    .isStrongPassword()
    .withMessage("La contraseña es debil. Debe contener por lo menos 1 minuscula, 1 mayuscula, 1 numero y 1 simbolo"),
  body("password2")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("La contraseña no coincide"),
  body("profile_picture")
    .custom((value, { req }) => {
      const file = req.file;
      if (!file == null) {
        throw new Error("Debe subir una imágen");
      }
    }),
];
