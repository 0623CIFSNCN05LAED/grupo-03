const productos = require("../data/productos");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    celulares: productos,
    encontrarCelular: function(id){
        return productos.find((celular) => celular.id == id);
    },
};