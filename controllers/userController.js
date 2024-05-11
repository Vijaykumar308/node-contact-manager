const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

/**
 * @description Get All user
 * @route GET /api/user/register
 * @access public
 */

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userAvailable = await User.findOne({email});
    console.log('user Availbility:', userAvailable);

    if(userAvailable) {
       res.status(400);
       throw new Error("User already registered!");
    }

    // Hash Password;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    
    const userCreated = await User.create({
        name,
        email,
        password: hashPassword
    });

    if(!userCreated) {
        res.status(400);
        throw new Error("User data is not valid");
    }

    res.status(201).json({_id:userCreated.id, email: userCreated.email});
})

/**
 * @description Login
 * @route GET /api/user/login
 * @access public
 */

const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const user = await User.findOne({email});

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200);
        const accessToken = jwt.sign({
            user:{
                email: user.email,
                id:user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: process.env.TOEKN_EXPIRY_TIME}
    )
        console.log(`my token:`, accessToken);
        res.json({accessToken});
    }
    else {
        res.status(400);
        res.json("email or password is not valid");
    }
})

/**
 * @description Get All user
 * @route GET /api/user/register
 * @access private
 */

const currentUser = asyncHandler(async (req, res)=> {
    res.status(201).json(req.user);
})


module.exports = {registerUser, loginUser, currentUser };
