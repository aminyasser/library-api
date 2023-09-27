const models = require('../models')
const Book = models.Book

    const getAll = async (req, res) => {
        try {
            // Get the owner of the report
            const books = await Book.findAll();
            res.status(200).json({ status: "success" , books: books });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    const get = async (req, res) => {
        try {
            // Get the owner of the report
            const book = await Book.findOne({ where: { id: req.params.id } });
            
            res.status(200).json({ status: "success" , book: book});
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    
    const create = async (req, res) => {
        try {
            // Get the owner of the report
            console.log(req.body);
            const book = await Book.create({ 
                title: req.body.title, 
                author: req.body.author, 
                isbn: req.body.isbn, 
                quantity: req.body.quantity, 
                shelf_location: req.body.shelf_location, 
              });

            
            res.status(200).json({status: "success" , book: book });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    const update = async (req, res) => {
        try {
           
            const book = await Book.update({  
                title: req.body.title, 
                author: req.body.author, 
                isbn: req.body.isbn, 
                quantity: req.body.quantity, 
                shelf_location: req.body.shelf_location, }, {
                where: {
                id: req.params.id
                }
            }) ;
            res.status(200).json({status: "success" , message: "record updated successfuly" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };

    const destroy = async (req, res) => {
        try {
            // Get the owner of the report
            const book = await Book.destroy({ where: { id: req.params.id } });
            res.status(200).json({book: book , status: "success" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    };




module.exports = { 
    getAll,
    get,
    create,
    update,
    destroy
 }
