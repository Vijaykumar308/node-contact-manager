const asyncHandler = require("express-async-handler");
const Contact  = require("../models/contactModel");
const { Error } = require("mongoose");
/**
 * @description Get All Contacts
 * @route GET /api/contacts
 * @access private
 */

const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json({data: contacts});
})


/**
 * @description Get Specific Contacts
 * @route GET /api/contacts/:id
 * @access private
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
 * @access private
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
        user_id: req.user.id,
        name,
        email,
        phone
    });

    res.status(201).json(contacts);
})

/**
 * @description Update Contact
 * @route PUT /api/contacts/:id
 * @access private
 */

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.send(404);
        throw new Error("Contact not found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Users don't have permisstion to update other user contacts");
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
 * @access private
 */

const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact) {
        res.send(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("Users don't have permisstion to update other user contacts");
    }
    await contact.deleteOne(); 
    
    res.status(200).json(contact);
})

module.exports = {getContacts, getSingleContact, createContact, updateContact, deleteContact};