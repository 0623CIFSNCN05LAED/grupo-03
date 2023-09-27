const db = require("../data/db");
const { v4: uuidv4 } = require("uuid");

const formatProductPrices = function (product) {
    const priceWithDiscount = product.precio - product.precio * (product.descuento / 100);
    product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es", {
      minimumFractionDigits: 2,
    })}`;
  
    product.precio = `$ ${product.precio.toLocaleString("es", {
      minimumFractionDigits: 2,
    })}`;
  
    product.descuento = product.descuento.toLocaleString("es");
  
    return product;
  };
  const formatProductsPrices = function (products) {
    return products.map((product) => formatProductPrices(product));
  };
  
  const productServices = {
    getAllProducts: () => {
      return db.products.find();
    },
    getProduct: (id) => {
      const product = db.products.findById(id);
      return formatProductPrices(product);
    },
    getFeaturedProducts: () => {
        const products = db.products
        .find()
        .filter((product) => product.categoria == "destacados");
        return formatProductsPrices(products);
    },
    searchProducts: (query) => {
      const products = db.products
        .find()
        .filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      return formatProductsPrices(products);
    },
  };
  
  module.exports = productServices;