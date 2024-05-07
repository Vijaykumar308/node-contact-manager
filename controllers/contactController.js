const asyncHandler = require("express-async-handler");
/**
 * @description Get All Contacts
 * @route GET /api/contacts
 * @access public
 */

const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Get All contacts"});
})


/**
 * @description Get Specific Contacts
 * @route GET /api/contacts/:id
 * @access public
 */

const getSingleContact = asyncHandler(async (req,res) => {
    res.status(201).json({message: `Get Contact for ${req.params.id}`});
})



/**
 * @description Create New Contact
 * @route POST /api/contacts
 * @access public
 */

const createContact = asyncHandler(async (req, res) => {
    const {name, email, phoneNo} = req.body;

    if(!name || !email || !phoneNo) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }

    res.status(201).json({message: "Create Contact "});
})

/**
 * @description Update Contact
 * @route PUT /api/contacts/:id
 * @access public
 */

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
}
)

/**
 * @description Delete Contact
 * @route POST /api/contacts/:id
 * @access public
 */

const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
})

module.exports = {getContacts, getSingleContact, createContact, updateContact, deleteContact};