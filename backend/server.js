// Load the application and port
const application  = require("./index");
const dbConnection = require("./config/db");
const constant = require("./constraint/global");

// Port Configuration and Db connnection
const PORT = process.env.PORT || 3500;
dbConnection() ? console.log(constant.dbMessages.success) : console.log(constant.dbMessages.failure);

application.listen(PORT, () => {console.log(`Your server is connected to http://localhost:${PORT}`)});