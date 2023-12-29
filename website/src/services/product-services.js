const { Products, Brands, Capacities, Colors, Images, Sequelize } = require("../database/models");
const { v4: uuidv4 } = require("uuid");

const formatPrice =
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  })


const productServices = {
  getAllProducts: async function () {
    const products = await Products.findAll({ include: ["brand", "image"], });
    for (let i = 0; i < products.length; i++) {
      products[i].price = formatPrice.format(products[i].price)
      products[i].priceWithDiscount = formatPrice.format(products[i].priceWithDiscount)
    }
    return products
  },

  getCountTotalProducts: async () => {
    const count = await Products.count();
    return count;
  },

  getProductsLimit: async (offset, limit) => {
    const products = await Products.findAll({
      include: ["brand"],
      offset,
      limit,
    });

    return products;
  },

  getProductsByBrand: async function (brand) {
    const productsByBrand = await Products.findAll({
      where: {
        id_brand: brand,
      },
      include: ["brand"],
    });
    return productsByBrand;
  },

  getProduct: (id) => {
    return Products.findByPk(id, {
      include: ["brand", "image", "colors", "capacities"],
    }).then((product) => {
      if (!product) {
        return null;
      }
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

  findById: async function (id) {
    const product = await Products.findByPk(id, {
      include: ["brand"],
    });
    return product;
  },

  //Paginación
  getAllProductsAndCount: ({
    page, offset
  }) => {
    return Products.findAndCountAll(
      { include: ["brand"] },
      {
        limit: page,
        offset: offset,
      })
  },

  getProductNoFormat: (id) => {
    return Products.findByPk(id, {
      include: ["brand", "image", "colors", "capacities"],
    }).then((product) => {
      return {
        id_product: product.id_product,
        name: product.name,
        description: product.description,
        featured_desc: product.featured_desc,
        featured: product.featured,
        price: product.price,
        priceWithDiscount: product.priceWithDiscount,
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
  getFeaturedProducts: async () => {
    const products = await Products.findAll({
      include: ["brand", "image"],
      where: {
        featured: 1
      },
    })
    for (let i = 0; i < products.length; i++) {
      products[i].price = formatPrice.format(products[i].price)
      products[i].priceWithDiscount = formatPrice.format(products[i].priceWithDiscount)
    }
    return products;
  },

  getFeaturedQuantity: async () => {
    const products = await Products.findAll({
        where: {
          featured: 1
      },
    })
    const qty = products.length;
    return qty;
  },

  searchProducts: async (query) => {
    const product = await Products.findOne({
      where: {
        name: {
          [Sequelize.Op.like]: "%" + query + "%",
        },
      },
      include: ["brand", "image"] 
    });
    if (product) {
      product.price = formatPrice.format(product.price)
      product.priceWithDiscount = formatPrice.format(product.priceWithDiscount)
    }
    return product;
  },

  getColors: () => {
    return Colors.findAll();
  },
  getCapacities: () => {
    return Capacities.findAll();
  },
  getBrands: () => {
    return Brands.findAll();
  },

  createProduct: async (product) => {
    console.log(`Creating product ${product.name}`);

    function getPriceWithDiscount(price, discount) {
      let priceWithDiscount = 0;
      if (discount != 0) {
        priceWithDiscount = price - price * (discount / 100);
      } else {
        priceWithDiscount = 0;
      }
      return priceWithDiscount;
    }

    let pwd = getPriceWithDiscount(product.price, product.discount);

    const prod = await Products.create({
      id_product: uuidv4(),
      name: product.name,
      description: product.description,
      featured_desc: product.featured_desc,
      featured: product.featured,
      price: product.price,
      priceWithDiscount: pwd,
      discount: product.discount,
      rating: product.rating,
      os: product.os,
      screen: product.screen,
      camera: product.camera,
      id_brand: product.brand,
    });

    for (let i = 0; i < product.images.length; i++) {
      Images.create({
        url_image: product.images[i],
        id_product: prod.id_product,
      })
    }
  },
  updateProduct: async (id, product) => {
    console.log(`Updating product ${product.name}`);

    function getPriceWithDiscount(price, discount) {
      let priceWithDiscount = 0;
      if (discount != 0) {
        priceWithDiscount = price - price * (discount / 100);
      } else {
        priceWithDiscount = 0;
      }
      return priceWithDiscount;
    }

    let pwd = getPriceWithDiscount(product.price, product.discount);

    const prod = await Products.update({
      name: product.name,
      description: product.description,
      featured_desc: product.featured_desc,
      featured: product.featured,
      price: product.price,
      priceWithDiscount: pwd,
      discount: product.discount,
      rating: product.rating,
      os: product.os,
      screen: product.screen,
      camera: product.camera,
    },
      {
        where: { id_product: id },
      });
  },
  deleteProduct: async (id, product) => {
    console.log(`Deleting product ${product.name}`);

    const productImages = Images.findAll({
      where: { id_product: id }
    }).then((image) => {
      return image.map((img) => {
        return Images.destroy({ where: { id_product: id } });
      });
    });

    return Promise.all([productImages]).then(() => {
      return Products.destroy({
        where: { id_product: id },
      });
    });
  },

  // getLastProductCreated: async function () {
  //   try {
  //     const lastProductCreated = await Products.findOne({
  //       order: [["createdAt", "DESC"]],
  //       limit: 1,
  //       include: ["productBrand"],
  //     });
  //     return lastProductCreated;
  //   } catch (error) {
  //     console.error("Error al obtener el último producto:", error);
  //     throw error;
  //   }
  // },
};



module.exports = productServices;