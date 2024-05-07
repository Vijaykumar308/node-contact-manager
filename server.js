const express = require("express");
require("dotenv").config();

const contactRouters = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorHandler");

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
// Middleware
app.use("/api/contacts",contactRouters);
app.use(errorHandler);



// Server Setup;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});