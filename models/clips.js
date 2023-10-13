const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/db")

class Clips extends Model {}

Clips.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
        sequelize,
        modelName: 'clips',
        timestamps: false,
    })

module.exports = Clips