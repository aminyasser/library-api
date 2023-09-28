const { body , param} = require('express-validator');
const validationMiddelware = require('../middlewares/validationMiddleware')
const models = require('../models')
const BookBorrower = models.BookBorrower


const checkoutValidator = [
  body("end_date").custom(async value => {
      let current = (new Date()).getDate();
      let endDate = (new Date(value)).getDate();
      let currendDay = (new Date()).toISOString().substring(0,10);
      if (endDate <  current ) {
          throw new Error(`end date must be after today: ${currendDay} `);
      }
  }),
  param("book_id").custom(async (value , { req }) => {
      const book = await BookBorrower.findOne({ where: {  
          borrower_id: req.params.borrower_id, 
          book_id: req.params.book_id ,
          is_returned: null
       } });

      const bookExists = await BookBorrower.findOne({ where: {  
      book_id: value ,
      is_returned: null
      } });

      if (book)  throw new Error(`borrower already have this book`);
      
      if (bookExists) throw new Error(`book is already borrowed, expect to return at ${bookExists.end_date}`)
             
  }),
   validationMiddelware
 ];


const returnValidator = [
  param("book_id").custom(async (value , { req }) => {
      const book = await BookBorrower.findOne({ where: {  
          borrower_id: req.params.borrower_id, 
          book_id: req.params.book_id ,
          is_returned: null
       } });
     
      if (!book) throw new Error("borrower didn't checkout this book to return");                
  }),
   validationMiddelware
];  

 const createBookValidator = [
    body("title")
      .notEmpty()
      .withMessage("title can't be empty"),
    body("isbn")
      .notEmpty()
      .withMessage("isbn can't be empty"),   
    body("author")
      .notEmpty()
      .withMessage("author can't be empty"),
    body("shelf_location")
      .notEmpty()
      .withMessage("author can't be empty"),
    body("quantity")
      .notEmpty()
      .withMessage("quantity can't be empty")
      .isInt({gt: 0})
      .withMessage("quantity must be greater than 0"),
    validationMiddelware
  ];

 const updateBookValidator = [
    body("title")
        .notEmpty()
        .withMessage("title can't be empty"),
    body("isbn")
        .notEmpty()
        .withMessage("isbn can't be empty"),   
    body("author")
        .notEmpty()
        .withMessage("author can't be empty"),
    body("shelf_location")
        .notEmpty()
        .withMessage("author can't be empty"),
    body("quantity")
        .notEmpty()
        .withMessage("quantity can't be empty")
        .isInt({gt: 0})
        .withMessage("quantity must be greater than 0"),
    validationMiddelware
  ];

  const createBorrowerValidator = [
    body("name")
        .notEmpty()
        .withMessage("name can't be empty"),
    body("email")
      .isEmail()
      .withMessage("email property must be valid email"),
    validationMiddelware
  ];

 const updateBorrowerValidator = [
   body("name")
     .notEmpty()
     .withMessage("name can't be empty"),
   body("email")
     .isEmail()
     .withMessage("email property must be valid email"),
    validationMiddelware
  ];


 module.exports =  {
    createBookValidator,
    updateBookValidator,
    createBorrowerValidator,
    updateBorrowerValidator,
    checkoutValidator,
    returnValidator
 } 