const express = require('express');
const bookController = require('../controllers/BookController')
const borrowerController = require('../controllers/BorrowerController')
const borrowingController = require('../controllers/BorrowingProcessController')


// App

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Books
router.get('/books', bookController.getAll);
router.get('/books/:id', bookController.get);
router.post('/books', bookController.create);
router.put('/books/:id', bookController.update);
router.delete('/books/:id', bookController.destroy);
router.get('/books/search/:query', bookController.search);

// Borrowers
router.get('/borrowers', borrowerController.getAll);
router.get('/borrowers/:id', borrowerController.get);
router.post('/borrowers', borrowerController.create);
router.put('/borrowers/:id', borrowerController.update);
router.delete('/borrowers/:id', borrowerController.destroy);



router.post('/borrowers/:borrower_id/checkout/:book_id', borrowingController.checkoutBook);
router.post('/borrowers/:borrower_id/return/:book_id', borrowingController.returnBook);









module.exports = router