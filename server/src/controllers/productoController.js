const Producto = require('../models/productoModel');

const getProductos = async (req, res) => {
    const productos = await Producto.findAll();
    res.json(productos);
};

const createProduct = async (req, res) => {
    const { nombre, descripcion, precio } = req.body
    const producto = await Producto.create({ nombre, descripcion, precio });
    res.json(producto);
};

module.exports = {
    getProductos,
    createProducto
};