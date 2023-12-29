const { Users } = require("../database/models");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require('bcryptjs');

const userServices = {
  getAllUsers: () => {
    return Users.findAll();
  },
  //last user
  getLastUser: () => {
    return Users.findOne({
      order: [
        ['created_at', 'DESC']
      ]
    });
  },
  getUserById: (id) => {
    return Users.findByPk(id);
  },
  getUserLimit: async function (offset, limit) {
    const users = await Users.findAll({
      include: ["users"],
      offset,
      limit,
    });
    return users;
  },
  getCountTotalUser: async function (){
    const count = await Users.count();
    return count;
  },

  // //Paginación
  // getAllUsersAndCount: ({
  //   pageSize, offset, 
  // }) => {
  //   return Users.findAndCountAll({
  //     limit: pageSize,
  //     offset: offset

  //   })
  // },

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
  findByUsername: (username) => {
    return Users.findOne({
      where: {
        username: username
      }
    });
  },
  isAdmin: (email) => {
    return Users.findOne({
      where: {
        email: email,
        admin: 1
      }
    });
  },
  /*validateUserLogin: (email, password) => {
    return Users.findOne({
      where: {
        email: email,
      } && bcrypt.compareSync(password, Users.password) == true
    });
    const user = Users.findOne({
      where: {
        email: email,
      }
    });
    console.log(user);

    console.log(user.password);
    console.log(user.last_name);

    if (bcrypt.compareSync(password, user.password) == true) {
      return user;
    } else {
      return null;
    }
  },*/
  registerUser: (data, imagen, admin) => {
    console.log(`Creating user ${data.name}`);
    const passwordOG = data.password;
    const encryptedPassword = bcrypt.hashSync(passwordOG, 10);

    return Users.create({
      id_user: uuidv4(),
      name: data.name,
      last_name: data.last_name,
      username: data.username,
      email: data.email,
      password: encryptedPassword,
      profile_picture: imagen ? imagen : ["/images/users/default-image.jpg"],
      admin: admin,
    });
  },
};

module.exports = userServices;
