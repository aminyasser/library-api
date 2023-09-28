const express = require('express');
const bookController = require('../controllers/BookController')
const borrowerController = require('../controllers/BorrowerController')
const borrowingController = require('../controllers/BorrowingProcessController')
const middleware = require('../handlers/validator')

// App

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Books
router.get('/books/overdue', borrowingController.getOverdueBooks);

router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.get);
router.post('/books', middleware.createBookValidator, bookController.create);
router.put('/books/:id', middleware.updateBookValidator , bookController.update);
router.delete('/books/:id', bookController.destroy);
router.get('/books/search/:query', bookController.search);

// Borrowers
router.get('/borrowers', borrowerController.getAll);
router.get('/borrowers/:id', borrowerController.get);
router.post('/borrowers', middleware.createBorrowerValidator , borrowerController.create);
router.put('/borrowers/:id', middleware.updateBorrowerValidator, borrowerController.update);
router.delete('/borrowers/:id', borrowerController.destroy);

// Borrowing Process
router.get('/borrowers/:borrower_id/books', borrowingController.getBooks);
router.post('/borrowers/:borrower_id/checkout/:book_id', middleware.checkoutValidator , borrowingController.checkoutBook);
router.post('/borrowers/:borrower_id/return/:book_id', middleware.returnValidator ,borrowingController.returnBook);


module.exports = router