const express = require("express");
require("dotenv").config();

const contactRouters = require("./routes/contactRoutes");

const PORT = process.env.PORT || 5001;
const app = express();

// Middleware
app.use("/api/contacts",contactRouters);






// Server Setup;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
});