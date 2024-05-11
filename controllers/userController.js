const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

/**
 * @description Get All user
 * @route GET /api/user/register
 * @access public
 */

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userAvailable = await User.findOne({email});
    console.log('user Availbility:', userAvailable);

    if(userAvailable) {
       res.status(400);
       throw new Error("User already registered!");
    }

    

    res.status(200).json("user is registered");
})

/**
 * @description Get All user
 * @route GET /api/user/register
 * @access public
 */

const loginUser = asyncHandler(async (req, res) => {
    res.status(201).json("login succesfully");
})

/**
 * @description Get All user
 * @route GET /api/user/register
 * @access public
 */

const currentUser = asyncHandler(async (req, res)=> {
    res.status(201).json("Your are the current user");
})


module.exports = {registerUser, loginUser, currentUser };
