const express = require('express');
const bookController = require('../controllers/BookController')
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






module.exports = router