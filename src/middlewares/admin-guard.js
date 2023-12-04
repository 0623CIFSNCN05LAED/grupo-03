const userServices = require("../services/user-services");

module.exports = (req, res, next) => {
    if (req.session.userData) {
        if (userServices.isAdmin(req.session.userData.email)) {
            next();
        }
    } else {
        res.redirect("/login");
    }
}