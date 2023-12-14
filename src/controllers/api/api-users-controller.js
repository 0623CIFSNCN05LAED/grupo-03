const userServices = require("../services/user-services");

module.exports = {
    users: async (req, res) => {
      const users = await userServices.getAllUsers();
    //   res.render("users", { users });

      res.json({
        meta: {
            status: 201,
            url: req.originalUrl,
        },
        data: products,
    });
  
    },
};