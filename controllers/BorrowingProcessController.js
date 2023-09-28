const models = require('../models')
const requestHandler = require('../handlers/RequestHandler');
const Borrower = models.Borrower
const Book = models.Book
const BookBorrower = models.BookBorrower
const { Op } = require('sequelize')


    const checkoutBook = async (req, res) => {
        try {
                                  
            const book = await BookBorrower.findOne({ where: {  
                borrower_id: req.params.borrower_id, 
                book_id: req.params.book_id ,
                is_returned: null
             } });

             if (book != null) {
                throw new Error("borrower already have this book"); 
             } else {
                // TO-DO validate end_date must be after start_date
                 await BookBorrower.create({ 
                    borrower_id: req.params.borrower_id, 
                    book_id: req.params.book_id , 
                    start_date: Date.now() ,
                    end_date: req.body.end_date
                });
                
                const result = await Borrower.findOne({where: { id: req.params.borrower_id,  }
                     , include: { model: Book , where: {id:req.params.book_id , } } });

                return requestHandler.sendSuccess(res, 'borrower checkout the book successfuly')({ result });
             }
             
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };

    const returnBook = async (req, res) => {
        try {
            const book = await BookBorrower.findOne({ where: {  
                borrower_id: req.params.borrower_id, 
                book_id: req.params.book_id ,
                is_returned: null
             } });
           
            if (book == null) {
                throw new Error("borrower didn't checkout this book"); 
            } else {
               
                await BookBorrower.update({ 
                    is_returned: true ,
                    return_date: Date.now()
                } , {
                    where: {
                       borrower_id: req.params.borrower_id, 
                       book_id: req.params.book_id , 
                    }
                });
                return requestHandler.sendSuccess(res, 'borrower return the book successfully')({  });
            }
           
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };
    
    const getBooks = async (req, res) => {
        try {  
            const borrower = await Borrower.findOne({ 
                where: {id: req.params.borrower_id},
                include: {
                  model: Book,
                  as: 'Books'
                }
              });
              const books = borrower.Books
              return requestHandler.sendSuccess(res, 'borrower books fetched successfuly')({ books });
             
             
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
          
    };

    const getOverdueBooks = async (req, res) => {
        try {  
            
           const overdueBooks =  await BookBorrower.findAll({
            attributes: ['book_id'],
            where: { end_date: { [Op.gte]: (new Date()).getDate() } ,is_returned: null }
            });
   
           const booksIds = overdueBooks.map((data) => {
                return data.book_id
            })

            const books = await Book.findAll({
                where: {id: { [Op.in]: booksIds}   }
            });

            return requestHandler.sendSuccess(res, 'overdue books fetched successfuly')({ books });
             
             
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
          
    };
   
      
module.exports = { 
    checkoutBook,
    returnBook,
    getBooks,
    getOverdueBooks
 }
