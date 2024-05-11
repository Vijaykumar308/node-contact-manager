const express = require("express");
const router = express.Router();
const {getContacts, getSingleContact, createContact, updateContact, deleteContact} = require("../controllers/contactController");
const validateToken = require("../middlewares/validateTokenHandler");


// router.route("/").get(getContacts);

// router.route("/:id").get(getSingleContact);

// router.route("/").post(createContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getSingleContact).put(updateContact).delete(deleteContact);



module.exports = router;
