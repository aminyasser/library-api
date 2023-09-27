const models = require('../models')
const requestHandler = require('../handlers/RequestHandler');
const Borrower = models.Borrower
const Book = models.Book
const BookBorrower = models.BookBorrower




    const checkoutBook = async (req, res) => {
        try {
                       
            // await borrower.addBook(book, { through: { start_date: Date("20/9/2023"), end_date: Date("22/9/2023") } });
           
            const book = await BookBorrower.findOne({ where: {  
                borrower_id: req.params.borrower_id, 
                book_id: req.params.book_id ,
                is_returned: null
             } });

             if (book != null) {
                throw new Error("borrower already have this book"); 
             } else {
                 await BookBorrower.create({ 
                    borrower_id: req.params.borrower_id, 
                    book_id: req.params.book_id , 
                    start_date: req.body.start_date ,
                    end_date: req.body.end_date
                });
                
                const result = await Borrower.findOne({where: { id: req.params.borrower_id,  }
                     , include: Book });

                return requestHandler.sendSuccess(res, 'checkout done successfuly')({ result });
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
              return requestHandler.sendSuccess(res, 'checkout done successfuly')({ books });
             
             
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
          
    };


module.exports = { 
    checkoutBook,
    returnBook,
    getBooks
 }
