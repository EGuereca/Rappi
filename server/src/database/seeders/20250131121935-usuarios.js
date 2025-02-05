'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password', 10);
    await queryInterface.bulkInsert('Users', [
      {
        email: 'iker@gmail.com',
        hashedPassword: hashedPassword,
        role: 'cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'repartidor@gmail.com',
        hashedPassword: hashedPassword,
        role: 'repartidor',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};