const db = require("../data/db");

const userServices = {
  getAllUsers: () => {
    const users = db.users.findAll();
    return users;
  },
  getUser: (id) => {
    return db.users.findById(id);
  },
  getUserEmail: (email) => {
    return db.users.findByEmail(email);
  },
  getUsername: (usuario) => {
    return db.users.findByUsername(usuario);
  },
  validateUserLogin: (email, contrasena) => {
    return db.users.findByLogin(email, contrasena);
  },
  registerUser: (user) => {
    db.users.register(user);
  },
};

module.exports = userServices;
