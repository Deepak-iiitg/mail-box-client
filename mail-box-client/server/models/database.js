const mysql = require('mysql2');
require('dotenv').config();
const {HOST,DB_PASS,DB_NAME,DB_USER} = process.env;
const conn = mysql.createConnection({
    host:HOST,
    user:DB_USER,
    password:DB_PASS,
    database:DB_NAME
})
module.exports = {conn};
