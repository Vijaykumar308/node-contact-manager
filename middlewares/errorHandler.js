const express = require("express");
const constants = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode) {
        case constants.BAD_REQUEST:
            res.json({title: "Bad Request", message: err.message, stackTrace: err.stack})     
            break;
            case constants.UNAUTHROIZED:
                res.json({title: "Unauthorized", message: err.message, stackTrace: err.stack})
                break;
            case constants.FORBIDDEN:
                res.json({title: "Validation Error", message: err.message, stackTrace: err.stack})     
            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack})
            break;
        case constants.SERVER_ERROR:
            res.json({title: "Internal Server Error", message: err.message, stackTrace: err.stack})
            break;
        default:
            console.log(`All working fine`);
    }
}

module.exports = errorHandler;