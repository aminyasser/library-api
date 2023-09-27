class RequestHandler {

    sendSuccess(res, message) {
        return (data, globalData) => {
            const status = 200 
            res.status(status).json({
                type: 'success', message: message || 'Success result',  data, ...globalData,
            });
        };
    }

    sendError(req, res, error) {
        return res.status(error.status || 500).json({
            type: 'error', message: error.message || error.message || 'Unhandled Error', error,
        });
    }

}

module.exports = new RequestHandler();