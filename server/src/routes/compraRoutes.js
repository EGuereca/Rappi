const express = require('express');
const compraController = require('../controllers/compraController');

const router = express.Router();

router.get('/', compraController.getCompras);
router.post('/', compraController.createCompra);
router.put('/:id', compraController.updateCompraEstado);

module.exports = router;