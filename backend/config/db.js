const config = require("./db.config");
const { Pool } = require("pg");

const connectioWithDb = () => {
    try{        
        // Test query 
        new Pool(config).query('Select * from public.products')
        return true
    }catch(error){
        throw error;
    }
}
module.exports = connectioWithDb