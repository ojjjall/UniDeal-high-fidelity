// db.js — MySQL connection pool for the Product & Market backend
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'unideal',
  waitForConnections: true,
  connectionLimit: 10,
});

// Export a promise-based pool so we can use async/await
module.exports = pool.promise();
