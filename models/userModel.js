const mongoose = require("mongoose");

const userModel = mongoose.Schema({
        username: {
            type:String,
            required: [true, "username is required"]
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        email: {
            type: String,
            unique: [true, "This email has already been taken"],
            required: [true, "email is required"]
        }
    },
    {
        timestamp: true
    }
)

mongoose.model("User", userModel);