const express = require("express");
const router = express.Router();
const {registerUser, loginUser, currentUser} = require("../controllers/userController");
// const {getContacts} = require("../routes/contactRoutes");
// const {registerUser, loginUser, currentUser} = require("../routes/userRoutes");


router.route("/register").post(registerUser);

router.route("/login").get(loginUser);

router.route("/current").get(currentUser);

module.exports = router;