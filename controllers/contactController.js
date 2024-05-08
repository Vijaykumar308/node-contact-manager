const asyncHandler = require("express-async-handler");
const Contact  = require("../models/contactModel");
/**
 * @description Get All Contacts
 * @route GET /api/contacts
 * @access public
 */

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json({status:200, data: contacts});
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
    const {name, email, phone} = req.body;

    // console.log(`${name} ${email} and ${phone}`);
// 
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !")
    }

    const contacts = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contacts);
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