/*const db = require("../data/db");*/
//db
const { Users } = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcryptjs');

const userServices = {
  /*getAllUsers: () => {
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
  },*/
  //funciones db
  getAllUsers: () => {
    return Users.findAll();
  },
  getUser: (id) => {
    return Users.findByPk(id);
  },
  /*getUserEmail: (email) => {
    return findByEmail(email);
  },
  getUsername: (usuario) => {
    return findByUsername(usuario);
  },*/
  getAdmin: (email) => {
    const isAdmin = 0;
    if (email.includes("@digitalphone.com")) {
      isAdmin = 1;
    }
    return isAdmin;
  },
  findByEmail: (email) => {
    return Users.findOne({
      where: {
        email: email
      }
    });
  },
  findByUsername: (usuario) => {
    return Users.findOne({
      where: {
        username: usuario
      }
    });
  },
  validateUserLogin: (email, contrasena) => {
    return Users.findOne({
      where: {
        email: email,
      } && bcrypt.compareSync(contrasena, Users.password) == true
    });
  },
  registerUser: (data, imagen, admin) => {
    console.log(`Creating user ${data.nombre}`);
    const passwordOG = data.contrasenia;
    const encryptedPassword = bcrypt.hashSync(passwordOG, 10);

    return Users.create({
      id_user: uuidv4(),
      name: data.nombre,
      last_name: data.apellido,
      username: data.usuario,
      email: data.email,
      password: encryptedPassword,
      profile_picture: imagen ? imagen : ["/images/users/default-image.jpg"],
      admin: admin,
    });
  },
};

module.exports = userServices;
