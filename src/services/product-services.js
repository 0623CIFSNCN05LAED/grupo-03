/*const db = require("../data/db");*/
const products = require("../data/products/products");
const { Products, Brands, Capacities, Colors, Images } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

const formatProductPrices = function (product) {
    const priceWithDiscount = product.price - product.price * (product.discount / 100);
    product.priceWithDiscount = `$ ${priceWithDiscount.toLocaleString("es", {
      minimumFractionDigits: 2,
    })}`;
  
    product.price = `$ ${product.price.toLocaleString("es", {
      minimumFractionDigits: 2,
    })}`;
  
    product.discount = product.discount.toLocaleString("es");
  
    return product;
};
const formatProductsPrices = function (products) {
  return products.map((product) => formatProductPrices(product));
};


const formatPrice =  
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })

  
const productServices = {
  /*getAllProducts: () => {
    const products = db.products.findAll()
    return formatProductsPrices(products);
  },
  getProduct: (id) => {
    return db.products.findById(id);
  },
  getFormattedProduct: (id) => {
    const product = db.products.findById(id);
    return formatProductPrices(product);
  },
  getFeaturedProducts: () => {
      const products = db.products
      .findAll()
      .filter((product) => product.category == "destacados");
      return formatProductsPrices(products);
  },
  searchProducts: (query) => {
    const products = db.products
      .findAll()
      .filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    return formatProductsPrices(products);
  },
  createProduct: (product) => {
    db.products.create(product);
  },
  updateProduct: (id, product) => {
    db.products.update(id, product);
  },
  deleteProduct: (id) => {
    db.products.delete(id);
  },*/

  //db
  /*getAllProducts: async () => {
    return await Products.findAll();
  },*/
  getAllProducts: async () => {
    /*return Products.findAll({include: ["brand", "image"],});*/
    const products = await Products.findAll({include: ["brand", "image"],});
    for (let i = 0; i < products.length; i++) {
      products[i].price = formatPrice.format(products[i].price)
      products[i].priceWithDiscount = formatPrice.format(products[i].priceWithDiscount)
    }
    return products;
  },
  getProduct: (id) => {
    return Products.findByPk(id, {
      include: ["brand", "image", "colors", "capacities"],
    }).then((product) => {
      return {
        id_product: product.id_product,
        name: product.name,
        description: product.description,
        featured_desc: product.featured_desc,
        featured: product.featured,
        price: formatPrice.format(product.price),
        priceWithDiscount: formatPrice.format(product.priceWithDiscount),
        discount: product.discount, 
        rating: product.rating,
        os: product.os,
        screen: product.screen,
        camera: product.camera,
        id_brand: product.id_brand,
        brand: product.brand?.brand ?? "No tiene marca",
        image: product.image.map((image) => {
          return {
            id_image: image.id_image,
            url_image: image.url_image,
          };
        }),
        colors: product.colors.map((color) => {
          return {
            id_color: color.id_color,
            color: color.color,
          };
        }),
        capacities: product.capacities.map((capacity) => {
          return {
            id_capacity: capacity.id_capacity,
            capacity: capacity.capacity,
          };
        }),
      }
    });
  },
  getFormattedProduct: async (id) => {
    /*const product = await this.getProduct(id);
    return formatProductPrices(product);*/
    
  },
  getFeaturedProducts: async () => {
    /*const products = getAllProducts().filter((product) => product.featured == 1);*/
    const products = await Products.findAll({include: ["brand", "image"],
      where: {
        featured: 1
      },
    })
    /*console.log(formatPrice.format(products[0].price));*/
    /*return formatProductsPrices(products);*/
    for (let i = 0; i < products.length; i++) {
      products[i].price = formatPrice.format(products[i].price)
      products[i].priceWithDiscount = formatPrice.format(products[i].priceWithDiscount)
    }
    return products/*.map((product) => formatPrice.format(product.price))*/;
  },
  searchProducts: (query) => {
    const products = getAllProducts().filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    return formatProductsPrices(products);
  },
  getBrand: (brand) => {
    Brands.findOne({
      where: {
        brand: brand.toLowerCase(),
      }
    });
    return Brands.id_brand;
  },
  getColors: () => {
    return Colors.findAll();
  },
  getCapacities: () => {
    return Capacities.findAll();
  },
  createProduct: (product) => {
    console.log(`Creating product ${product.name}`);
    return Products.create({
      id_product: uuidv4(),
      name: product.name,
      description: product.description,
      featured_desc: product.featured_desc,
      featured: product.featured,
      price: product.price,
      priceWithDiscount: product.price - product.price * (product.discount / 100),
      discount: product.discount,
      rating: product.rating,
      os: product.os,
      screen: product.screen,
      camera: product.camera,
      id_brand: this.getBrand(product.brand),
    });
  },
  createProductImage: (image, id_prod) => {
    return Images.create({
      id_image: uuidv4(),
      url_image: image,
      id_product: id_prod,
    });
  },
  /*createProductColor: () => {
    return ProductsColors.create({
      id_
    })
  },
  createProductCapacity: () => {
    return ProductsCapacities.create({
      id_
    })
  },*/
};
  
module.exports = productServices;