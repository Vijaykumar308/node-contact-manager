const constants = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case constants.VALIDATION_ERROR:

            break;
        case constants.UNAUTHROIZED:

            break;
        case constants.FORBIDDEN:

            break;
        case constants.NOT_FOUND:

            break;
        case constants.SERVER_ERROR:

            break;
        default:
            console.log(`All working fine`);
    }
    
    res.json({title: "Not Found", message: err.message, stackTrace: err.stackTrace})
    res.json({title: "Validation Error", message: err.message, stackTrace: err.stackTrace})
}

module.exports = errorHandler;