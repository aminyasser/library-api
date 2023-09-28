const { validationResult } = require('express-validator')
const requestHandler = require('../handlers/RequestHandler');

// Middleware for validation
const validationMiddelware = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return requestHandler.sendError(req, res, errors.array(),errors.array()[0].msg);
    }
    next();
}

module.exports = validationMiddelware;
