const userServices = require("../../services/user-services");

module.exports = {
  users: async (req, res) => {

    try {
      // const pageSize = 5;
      // const page = req.query.page || 1;
      const totalUserCount = await userServices.getCountTotalUser();
      // const offset = (page - 1) * pageSize;
      const allUsers = await userServices.getAllUsers(
        // offset,
        // pageSize
      );

      console.log("totalUserCount", allUsers);
      // const totalPages = Math.ceil(totalUserCount / pageSize);

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
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  },

  detail: async (req, res) => {
    const user = await userServices.getUserById(req.params.id);
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
  },

  ultimoUsuario: async (req, res) => {
    const ultimoUsuario = await userService.findUltimoUsuarioCreado();
    const imagesPath = "http://localhost:3030/images/users/";
    const imageUrl = `${imagesPath}${lastUser.avatar}`;
    const userToApi = {
      id: ultimoUsuario.id_user,
      name: ultimoUsuario.name,
      last_name: ultimoUsuario.last_name,
      email: ultimoUsuario.email,
      profile_picture: "localhost:3030" + user.profile_picture,
    };
    let respuesta = { ultimoUsuario: userToApi };
    res.json(respuesta);
  },
};

