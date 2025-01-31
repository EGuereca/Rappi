const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./userModel');

const Compra = sequelize.define('Compra', {
    estado: {
        type: DataTypes.ENUM('pendiente', 'en camino', 'entregado', 'cancelado'),
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

Compra.belongsTo(User, { as: 'Cliente' });
Compra.belongsTo(User, { as: 'Repartidor' });

module.exports = Compra;