module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Colors", 
        {
        id_color: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        color: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        }, 
        {
        tableName: 'colors',
        timestamps: false,
    });

    Model.associate = (db) => {
        Model.belongsToMany(db.Products, {
            as: "products",
            through: "product_color",
            foreignKey: "id_product",
            otherKey: "id_color",
            timestamps: false,
        });
    };

    return Model;
};