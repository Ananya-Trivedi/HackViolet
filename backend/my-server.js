// Require function allows us to include modules 
// that exist in separate files. 
const express = require('express');
const cors = require('cors');

// Configures in such a way that allows us to have the 
// environment variables in the .emv file
require('dotenv').config();

// Creates the express server
const app = express();
// Port that the server will be on
const port = process.env.PORT || 5000;

// Cors middleware
app.use(cors());
// Asllows us to parse json
app.use(express.json());



// Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});