// Required packages
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

// Application loded
const application = express();

// Middlewares
application.use(express.static(path.join(__dirname, 'public')));
application.use(cors());
application.use(express.json());
application.use(bodyParser.urlencoded({extended : true}));

// Routes
require("./routes/index")(application);

module.exports = application;