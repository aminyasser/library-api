const models = require('../models')
const { Op } = require("sequelize");
const requestHandler = require('../handlers/RequestHandler');
const Book = models.Book


    const getAll = async (req, res) => {
        try {
            const books = await Book.findAll();
            return requestHandler.sendSuccess(res, 'books fetched successfully')({ books });
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };

    const get = async (req, res) => {
        try {
            const book = await Book.findOne({ where: { id: req.params.id } });
            
            return requestHandler.sendSuccess(res, 'book fetched successfully')({ book });
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };
    
    const create = async (req, res) => {
        try {
           
            const book = await Book.create({ 
                title: req.body.title, 
                author: req.body.author, 
                isbn: req.body.isbn, 
                quantity: req.body.quantity, 
                shelf_location: req.body.shelf_location, 
              });

            return requestHandler.sendSuccess(res, 'book created successfully')({ book });

        } catch (error) {
            return requestHandler.sendError(req, res, error);
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
        
            return requestHandler.sendSuccess(res, 'book updated successfuly')({  });

        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };

    const destroy = async (req, res) => {
        try {
          
            const book = await Book.destroy({ where: { id: req.params.id } });
            
            return requestHandler.sendSuccess(res, 'book deleted successfuly')({  });            
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };
  

    const search = async (req, res) => {
        try {
  
             const books = await Book.findAndCountAll({
                where: {
                    [Op.or]: [
                     {title: { [Op.like]:   req.params.query + '%' } },
                     {author: { [Op.like]:  req.params.query + '%' }},
                     {isbn: { [Op.like]:  req.params.query + '%' }},
                    ]
                  }
              });
              
            const result = books.rows
            return requestHandler.sendSuccess(res, `you have ${books.count} search results`)({ result });

        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };
    



module.exports = { 
    getAll,
    get,
    create,
    update,
    destroy,
    search
 }
