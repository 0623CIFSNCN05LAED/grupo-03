const userServices = require("../../services/user-services");

module.exports = {
  users: async (req, res) => {

    try {
      const totalUserCount = await userServices.getCountTotalUser();
      const allUsers = await userServices.getAllUsers();

      console.log("totalUserCount", allUsers);

      const response = {
        meta: {
          count: totalUserCount,
          status: 200,
        },
        users: allUsers.map((user) => ({
          id: user.id_user,
          name: user.name,
          email: user.email,
          detail: `http://localhost:3030/api/users/${user.id_user}`
        })),

      };
      return res.json(response);

    }
    catch (error) {
      res.status(500).json({ error: "Error al obtener los productos" });
    }
  },

  detail: async (req, res) => {
    const id = req.params.id
    const user = await userServices.getUserById(id);
    console.log("user", user)
    if (user) {
      res.json({
        meta: {
          status: 200,
          url: req.originalUrl,
        },
        data: {
          id_user: user.id_user,
          name: user.name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          profile_picture: "localhost:3030" + user.profile_picture,

        },
      });
    } else {
      throw new Error('User not found')
    }
  },

  last_user: async (req, res) => {
    const last_user = await userServices.getLastUser();
    console.log("CONTROLLER", last_user)
    const response = {
      meta: {
        status: 200,
        url: `http://localhost:3030/api/users/last`
      },
      data: {
        name: last_user.name,
        last_name: last_user.last_name,
        email: last_user.email,
        created_at_: new Date(last_user.created_at)
      }
    }
    res.json(response)
  }

};


