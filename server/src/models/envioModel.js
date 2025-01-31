const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Compra = require('./compraModel');

const Envio = sequelize.define('Envio', {
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaEnvio: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

Envio.belongsTo(Compra);

module.exports = Envio;