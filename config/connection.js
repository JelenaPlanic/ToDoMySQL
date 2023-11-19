const mysql = require("mysql2");
const { HOST, USER, PASSWORD, DATABASE } = require("./config");

const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    namedPlaceholders : true
}).promise();

module.exports = pool;