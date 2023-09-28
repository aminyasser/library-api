class RequestHandler {

    sendSuccess(res, message) {
        return (data, globalData) => {
            const status = 200 
            res.status(status).json({
                type: 'success', message: message || 'Success result',  data, ...globalData,
            });
        };
    }

    sendError(req, res, error , msg = 'Unhandled Error') {
        return res.status(error.status || 500).json({
            type: 'error', message: error.message || error.message || msg, error,
        });
    }

}

module.exports = new RequestHandler();