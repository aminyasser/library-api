'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Book.belongsToMany(models.Borrower, { through: models.BookBorrower ,
        foreignKey: "book_id",
        otherKey: 'borrower_id'});
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    shelf_location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};