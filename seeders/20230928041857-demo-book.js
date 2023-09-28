'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Books', [{
        title: 'Math for Cs',
        isbn: ' 0-9767736-6-X',
        author: "Amin Yasser",
        quantity: 1,
        shelf_location: "B1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, 
      {
        title: 'Intro to Algorithms',
        isbn: '978-0-9767736-6-5',
        author: "Kamal Ali",
        quantity: 1,
        shelf_location: "B2",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        title: 'Intro to Database Systems',
        isbn: '978-0-9767736-5-5',
        author: "Hussien Nasser",
        quantity: 1,
        shelf_location: "B4",
        createdAt: new Date(). toISOString(),
        updatedAt: new Date(). toISOString()
      },
      {
        title: 'Clean Code',
        isbn: '978-0-9747736-5-5',
        author: "Uncle Bob",
        quantity: 1,
        shelf_location: "B1",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
     ], {});
 
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Books', null, {});
     
  }
};
