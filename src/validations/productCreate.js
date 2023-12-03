const { body } = require("express-validator");
const productServices = require("../services/product-services");

module.exports = [
  body("brand")
    .exists()
    .withMessage("Debe completar este campo"),
  body("name")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isLength({ min: 5 })
    .isLength({ max: 80 })
    .withMessage("Ingrese un nombre válido (min:5, max:80)")
    .bail()
    .isAlphanumeric()
    .withMessage("El nombre del producto solo puede contener letras y números"),
  body("description")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .custom(async (value, { req }) => {
      if (req.body.description.length < 100 || req.body.description.length > 1300) {
        throw new Error("Ingrese una descripción válida (min:100, max:1300)");
      } 
    }),
  body("featured")
    .exists()
    .withMessage("Debe completar este campo")
    .custom(async (value, { req }) => {
      const qty = await productServices.getFeaturedQuantity();
      if (req.body.featured == "1" && qty >= 6) {
        throw new Error("Ya existen 6 productos destacados");
      } 
    }),
  body("featured_desc")
    .custom(async (value, { req }) => {
      const qty = await productServices.getFeaturedQuantity();
      if (req.body.featured_desc && req.body.featured != "1") {
        throw new Error('Debe seleccionar "Destacado" para destacar el producto');
      }
    })
    .bail()
    .custom(async (value, { req }) => {
      if (!req.body.featured_desc && req.body.featured == "1") {
        throw new Error('Debe ingresar una descripcion destacada');
      } else if (req.body.featured_desc) {
        if (req.body.featured_desc.length < 15 || req.body.featured_desc.length > 300) {
          throw new Error("Ingrese una descripción destacada válida (min:15, max:300)");
        }
      }
    }),
  /*
  body("images")
    //Checkear que se suba por lo menos una imagen, y luego que no sean mas de 5
    .custom((value, { req }) => {
      const file = req.file;
      if (!file == null) {
        throw new Error("Debe subir por lo menos una imágen");
      }
    }), 
  */
  body("price")
    .notEmpty()
    .withMessage("Debe completar este campo")
    .bail()
    .isLength({ max: 10 })
    .withMessage("Ingrese un precio válido (max caracteres:10)")
    .bail()
    .isDecimal()
    .withMessage('El campo debe ser formato "1234567.00"')
    .bail()
    .custom(async (value) => {
      if (value <= 0) {
        throw new Error("El precio no puede ser menor o igual a 0");
      }
    }),
  body("discount")
    .optional({ checkFalsy: true })
    .bail()
    .isDecimal()
    .withMessage('El campo debe ser formato "90.5"')
    .custom(async (value, { req }) => {
      if (req.body.discount) {  
        if (req.body.discount.length > 5) {
          throw new Error("Ingrese un descuento válido (max caracteres:5)");
        } else if (value <= 0 || value > 100) {
          throw new Error("El descuento no puede ser menor a 0 o mayor a 100");
        }
      }
    }),
    body("rating")
      .notEmpty()
      .withMessage("Debe completar este campo")
      .bail()
      .isLength({ max: 3 })
      .withMessage("Ingrese una califcación válida (max caracteres:3)")
      .bail()
      .isDecimal()
      .withMessage('El campo debe ser formato "4.5"')
      .bail()
      .custom(async (value) => {
        if (value != 0 && value && 0.5 && value != 1 && value != 1.5 && value != 2 && value != 2.5 && value != 3 && value != 3.5 && value != 4 && value != 4.5 && value != 5) {
          throw new Error("El descuento no puede ser menor a 0 o mayor a 5, y solo puede tener .5 de decimal");
        }
      }),
    body("os")
      .notEmpty()
      .withMessage("Debe completar este campo")
      .bail()
      .isLength({ min: 3 })
      .isLength({ max: 50 })
      .withMessage("Ingrese un sistema operativo válido (min:3, max:50)")
      .bail()
      .isAlpha()
      .withMessage("El nombre del producto solo puede contener letras"),  
    body("screen")
      .notEmpty()
      .withMessage("Debe completar este campo")
      .bail()
      .isLength({ min: 10 })
      .isLength({ max: 80 })
      .withMessage("Ingrese una pantalla válida (min:10, max:80)"),
    body("camera")
      .notEmpty()
      .withMessage("Debe completar este campo")
      .bail()
      .isLength({ min: 10 })
      .isLength({ max: 50 })
      .withMessage("Ingrese una camara válida (min:10, max:50)"),      
];
