const userServices = require("../services/user-services");

module.exports = async (req, res, next) => {
    if (req.session.userData) {
        const user = await userServices.isAdmin(req.session.userData.email)
        if (user) {
            next();
        }
        else {
            res.redirect("/login");
        }
    } else {
        res.redirect("/login");
    }
}