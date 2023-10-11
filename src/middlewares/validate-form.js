const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.redirect("/login");
        res.json(errors.mapped());
    } else {
        next();
    }
};