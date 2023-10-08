const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) =>{
    let error = {...err};
    error.message = error.message;

    if(err.name === "castError"){
        const message = `resource not found ${err.value}`;
        error = new errorResponse(message, 404);
    }
    //mongoose duplicate value
    if(err === 11000){
        const message = "Duplicate field value entered";
        error = new errorResponse(message, 400);
    }
     //mongoose validation error
    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(val => ' ' + val.message);
        error = new errorResponse(message, 400);
    }

    res.status(error.codeStatus || 500).json({
        success:false,
        error: error.message || "server error"
    })

}

module.exports = errorHandler;