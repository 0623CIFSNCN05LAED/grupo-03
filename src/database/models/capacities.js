module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Capacities", 
        {
        id_capacity: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        capacity: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true,
        },
        }, 
        {
        tableName: 'capacities',
        timestamps: false,
    });

    Model.associate = (db) => {
        Model.belongsToMany(db.Products, {
            as: "products",
            through: "product_capacity",
            foreignKey: "id_product",
            otherKey: "id_capacity",
            timestamps: false,
        });
    };

    return Model;
};