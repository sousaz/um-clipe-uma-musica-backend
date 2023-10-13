const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/db")

class Musics extends Model {}

Musics.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    music_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
        sequelize,
        modelName: 'musics',
        timestamps: false,
    })

module.exports = Musics