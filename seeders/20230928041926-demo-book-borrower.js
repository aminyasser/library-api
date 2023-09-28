'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('BookBorrowers', [{
      book_id: 1,
      borrower_id: 1,
      start_date: "2023-09-26",
      end_date: "2023-09-27",
      return_date: null,
      is_returned: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, 
    {
      book_id: 2,
      borrower_id: 1,
      start_date: "2023-09-26",
      end_date: "2023-09-28",
      return_date: "2023-09-28",
      is_returned: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      book_id: 2,
      borrower_id: 2,
      start_date: "2023-09-28",
      end_date: "2023-10-02",
      return_date: null,
      is_returned: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      book_id: 3,
      borrower_id: 3,
      start_date: "2023-09-28",
      end_date: "2023-09-29",
      return_date: null,
      is_returned: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
   ], {});
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('BookBorrowers', null, {});
   
  }
};
