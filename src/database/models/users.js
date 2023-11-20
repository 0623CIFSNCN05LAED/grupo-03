module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "User", 
        {
        id_user: {
            type: DataTypes.STRING(80),
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(35),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        profile_picture: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: '0',
            allowNull: false,
        },
    }, {
        tableName: 'users',
    });

    return Model;
};