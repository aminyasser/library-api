const express = require('express');
const bookController = require('../controllers/BookController')
const borrowerController = require('../controllers/BorrowerController')
const borrowingController = require('../controllers/BorrowingProcessController')
const validator = require('../handlers/validatorHandler')

// App

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Books
router.get('/books/overdue', borrowingController.getOverdueBooks);

router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.get);
router.post('/books', validator.createBookValidator, bookController.create);
router.put('/books/:id', validator.updateBookValidator , bookController.update);
router.delete('/books/:id', bookController.destroy);
router.get('/books/search/:query', bookController.search);

// Borrowers
router.get('/borrowers', borrowerController.getAll);
router.get('/borrowers/:id', borrowerController.get);
router.post('/borrowers', validator.createBorrowerValidator , borrowerController.create);
router.put('/borrowers/:id', validator.updateBorrowerValidator, borrowerController.update);
router.delete('/borrowers/:id', borrowerController.destroy);

// Borrowing Process
router.get('/borrowers/:borrower_id/books', borrowingController.getBooks);
router.post('/borrowers/:borrower_id/checkout/:book_id', validator.checkoutValidator , borrowingController.checkoutBook);
router.post('/borrowers/:borrower_id/return/:book_id', validator.returnValidator ,borrowingController.returnBook);


module.exports = router