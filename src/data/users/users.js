const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    getUsers: function () {
      const usersFilePath = path.join(__dirname, "./usersDataBase.json");
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      return users;
    },
    saveUsers: function (users) {
      const usersFilePath = path.join(__dirname, "./usersDataBase.json"); 
      fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    },
    findAll: function () {
      return this.getUsers();
    },
    findById: function (id) {
      const user = this.getUsers().find((user) => user.id == id);
      return user;
    },
    findByEmail: function (email) {
      const user = this.getUsers().find((user) => user.email == email);
      return user;
    },
    findByUsername: function (usuario) {
      const user = this.getUsers().find((user) => user.usuario == usuario);
      return user;
    },
    findByLogin: function (email, contrasena) {
      const user = this.getUsers().find((user) => user.email == email && user.contraseña == contrasena);
      return user;
    },
    register: function (user) {
      console.log(`Creating user ${user.nombre}`);
      const users = this.getUsers();
      const newUser = {
        id: uuidv4(),
        ...user,
      };
      users.push(newUser);
      this.saveUsers(users);
    },
};