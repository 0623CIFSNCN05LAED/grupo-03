const fs = require("fs");
const path = require("path");

module.exports = {
    find: () => {
      const usersFilePath = path.join(__dirname, "./usersDataBase.json");
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      return users;
    },
    findById: (id) => {
      const usersFilePath = path.join(__dirname, "./usersDataBase.json");
      const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
      const user = users.find((user) => user.id == id);
      return user;
    },
};