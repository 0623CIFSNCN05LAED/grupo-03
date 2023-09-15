const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "./usersDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports = usuarios;