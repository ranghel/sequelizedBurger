


module.exports = function (sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
        // createdAt: {
        //     type: DataTypes.DATE,
        //     defaultValue: sequelize.literal('NOW()')
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     defaultValue: sequelize.literal("NOW()")
        // }
    });

    return Burger;

};

