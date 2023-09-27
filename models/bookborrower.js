'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookBorrower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookBorrower.belongsTo(models.Book, { foreignKey: 'book_id' });
      BookBorrower.belongsTo(models.Borrower, { foreignKey: 'borrower_id' });
    }
  }
  BookBorrower.init({
    book_id: DataTypes.INTEGER,
    borrower_id: DataTypes.INTEGER,
    start_date: DataTypes.DATEONLY,
    end_date: DataTypes.DATEONLY,
    is_returned: DataTypes.BOOLEAN,
    return_date: DataTypes.DATEONLY,

  }, {
    sequelize, 
    modelName: 'BookBorrower',
  });
  return BookBorrower;
};