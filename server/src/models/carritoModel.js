const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');
const Producto = require('./productoModel');

const Carrito = sequelize.define('Carrito', {
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Carrito.belongsTo(User, { as: 'Cliente' });
Carrito.belongsTo(Producto);

module.exports = Carrito;