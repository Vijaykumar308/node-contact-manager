const express = require("express");
require("dotenv").config();
const connectDb = require("./configs/dbconn");
const contactRouters = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 5001;
const DATABASE_URL = process.env.DATABASE_URL;


connectDb(DATABASE_URL);

const app = express();

app.use(express.json());

// Middleware
app.use("/api/contacts",contactRouters);
app.use(errorHandler);



// Server Setup;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});