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
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.send(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
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
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.send(404);
        throw new Error("Contact not found");
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.status(200).json(updateContact);
}
)

/**
 * @description Delete Contact
 * @route POST /api/contacts/:id
 * @access public
 */

const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.send(404);
        throw new Error("Contact not found");
    }
    console.log('Contact found:', contact);
    await contact.deleteOne(); 
    console.log('Contact removed:', contact);
    res.status(200).json(contact);
})

module.exports = {getContacts, getSingleContact, createContact, updateContact, deleteContact};