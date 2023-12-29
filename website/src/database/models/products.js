module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Products",
        {
            id_product: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(80),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            featured_desc: {
                type: DataTypes.STRING(300),
                allowNull: true,
                defaultValue: null,
            },
            featured: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: '0',
            },
            price: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: false,
            },
            priceWithDiscount: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: true,
                defaultValue: '0',
            },
            discount: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: true,
                defaultValue: null,
            },
            rating: {
                type: DataTypes.FLOAT.UNSIGNED,
                allowNull: false,
            },
            os: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            screen: {
                type: DataTypes.STRING(80),
                allowNull: false,
            },
            camera: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            id_brand: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
        },
        {
            tableName: 'products',
            timestamps: false,
            // createdAt: 'created_at',
            // updatedAt: 'updated_at',
        });

    Model.associate = (db) => {
        Model.belongsTo(db.Brands, {
            as: "brand",
            foreignKey: "id_brand",
        });
        Model.hasMany(db.Images, {
            as: "image",
            foreignKey: "id_product",
        });
        Model.belongsToMany(db.Colors, {
            as: "colors",
            through: "product_color",
            foreignKey: "id_color",
            otherKey: "id_product",
            timestamps: false,
        });
        Model.belongsToMany(db.Capacities, {
            as: "capacities",
            through: "product_capacity",
            foreignKey: "id_capacity",
            otherKey: "id_product",
            timestamps: false,
        });
    };

    return Model;
};