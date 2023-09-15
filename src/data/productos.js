const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./productsDataBase.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

module.exports = productos;