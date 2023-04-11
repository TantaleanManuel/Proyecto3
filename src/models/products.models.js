const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Products = db.define('products', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
    },
    stock: {
        type: DataTypes.INTEGER,
    },
})

module.exports = Products
