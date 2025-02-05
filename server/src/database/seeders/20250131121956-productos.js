'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Productos', [
      {
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
        precio: 10.0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto 2',
        precio: 20.0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Productos', null, {});
  }
};