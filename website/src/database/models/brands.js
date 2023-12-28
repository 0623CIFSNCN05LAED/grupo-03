module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Brands", 
        {
        id_brand: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        brand: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        }, 
        {
        tableName: 'brands',
        timestamps: false,
    });

    Model.associate = (db) => {
        Model.hasMany(db.Products, {
            as: "product",
            foreignKey: "id_brand",
        });
    };

    return Model;
};