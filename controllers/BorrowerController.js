const models = require('../models')
const requestHandler = require('../handlers/RequestHandler');
const Borrower = models.Borrower


    const getAll = async (req, res) => {
        try {
            // TO-DO validate first
            const borrowers = await Borrower.findAll();
            return requestHandler.sendSuccess(res, 'borrowers fetched successfully')({ borrowers });
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };

    const get = async (req, res) => {
        try {
            
            const borrower = await Borrower.findOne({ where: { id: req.params.id } });
            
            return requestHandler.sendSuccess(res, 'borrower fetched successfully')({ borrower });
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };
    
    const create = async (req, res) => {
        try {
           
           
            const borrower = await Borrower.create({ 
                name: req.body.name, 
                email: req.body.email, 
                registered_date: Date.now() 
            });

            
            return requestHandler.sendSuccess(res, 'borrower created successfully')({ borrower });

        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };

    const update = async (req, res) => {
        try {
           
            const borrower = await Borrower.update({  
                name: req.body.name, 
                email: req.body.email,  }, {
                where: {
                id: req.params.id
                }
            }) ;
        
            return requestHandler.sendSuccess(res, 'borrower updated successfuly')({  });

        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };

    const destroy = async (req, res) => {
        try {
          
            const borrower = await Borrower.destroy({ where: { id: req.params.id } });
            
            return requestHandler.sendSuccess(res, 'borrower deleted successfuly')({  });            
        } catch (error) {
            return requestHandler.sendError(req, res, error);
        }
    };
  

module.exports = { 
    getAll,
    get,
    create,
    update,
    destroy
 }
