const constants = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Error", message: err.message, stackTrace: err.stackTrace})
            break;
        case constants.UNAUTHROIZED:

            break;
        case constants.FORBIDDEN:

            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stackTrace})
            break;
        case constants.SERVER_ERROR:

            break;
        default:
            // console.log(`All working fine`);
    }
}

module.exports = errorHandler;