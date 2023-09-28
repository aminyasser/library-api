'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Borrowers', [{
      name: 'Amin',
      email: ' alaminyasser0@gmail.com',
      registered_date: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, 
    {
      name: 'Ahmed',
      email: 'ahmed@test.com',
      registered_date: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      name: 'Ali',
      email: 'ali@test.com',
      registered_date: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Borrowers', null, {});
     
  }
};
