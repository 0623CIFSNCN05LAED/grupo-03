const userServices = require("../services/user-services");

const bcrypt = require('bcryptjs');

module.exports = {
  users: async (req, res) => {
    const users = await userServices.getAllUsers();
    res.render("users", { users });

  },
  showLogin: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    res.render("login", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  login: async (req, res) => {
    const data = req.body;
    console.log(data);

    const user = await userServices.findByEmail(req.body.email)

    if (!user) {
      return res.render("login", {
        errors: {
          email: { msg: "Ese email no esta registrado" }
        }
      })
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.render("login", {
        errors: {
          password: { msg: "Contraseña incorrecta" }
        }
      })
    } else {
      req.session.userData = data;
      console.log('data session');
      return res.redirect("/");
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
  showRegister: (req, res) => {
    const errors = req.session.errors;
    const oldData = req.session.oldData;
    req.session.errors = null;
    req.session.oldData = null;
    res.render("register", {
      errors: errors ? errors : null,
      oldData: oldData ? oldData : null,
    });
  },
  register: (req, res) => {
    const data = req.body;
    console.log(data);
    req.session.userData = data;
    const img = req.file;
    const imagen = `/images/products/${img.filename}`
    const admin = userServices.getAdmin(data.email);
    userServices.registerUser(data, imagen, admin);

    res.redirect("/login");
  },
};
