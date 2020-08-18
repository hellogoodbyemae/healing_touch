const { Model } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define("Contact", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                lens: [1]
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                lense: [1, 150]
            }
        }
    });
    return Contact;
};