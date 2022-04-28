require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
        con.query(sql, binding, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        });
    });
}

const createQuery = "CREATE DATABASE IF NOT EXISTS iternaryproject";
con.query(createQuery);

module.exports = {
    query,
    con
}