const express = require("express");
const router = express.Router();


router.route("/").get((req,res) => {
    res.status(200).json({message: "Get All contacts"});
});

router.route("/:id").get((req,res) => {
    res.status(200).json({message: `Get Contact for ${req.params.id}`});
});

router.route("/").post((req,res) => {
    res.status(200).json({message: "Create Contact"});
});


router.route("/:id").put((req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

router.route("/:id").delete((req,res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
});



/***
 * Route::get("/", [controllerName::class, 'methodName']);
 */

module.exports = router;
