module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Images", 
        {
        id_image: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        url_image: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        id_product: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        }, 
        {
        tableName: 'images',
        timestamps: false,
    });

    Model.associate = (db) => {
        Model.belongsTo(db.Products, {
            as: "product",
            foreignKey: "id_product",
        });
    };

    return Model;
};