const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

// Rutas de autenticacion
router.post('/register', [
    check('email').isEmail().withMessage('Debe ser un email válido'),
    check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    check('role').isIn(['cliente', 'repartidor']).withMessage('El rol debe ser cliente o repartidor')
], authController.registerUser);
router.post('/login', authController.login);

module.exports = router;