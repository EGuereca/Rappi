const Compra = require('../models/compraModel');
const User = require('../models/userModel');

const getCompras = async (req, res) => {
    const compras = await Compra.findAll({ include: [User] });
    res.json(compras);
};

const createCompra = async (req, res) => {
    const { ClienteId, RepartidorId, estado, total } = req.body;
    const checkCompra = await Compra.findOne({ where: { ClienteId, estado: 'pendiente' } });
    if (checkCompra) {
        return res.status(400).json({ error: 'Ya tienes una compra pendiente' });
    }
    const compra = await Compra.create({ ClienteId, RepartidorId, estado, total });
    res.json(compra);
};

const updateCompraEstado = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    const compra = await Compra.findByPk(id);
    if (!compra) {
        return res.status(404).json({ error: 'Compra no encontrada' });
    }
    compra.estado = estado;
    await compra.save();
    res.json(compra);
};

module.exports = {
    getCompras,
    createCompra,
    updateCompraEstado
};