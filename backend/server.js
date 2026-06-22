// server.js — UniDeal backend smoke test
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Connection pool to MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Test route — is the server alive?
app.get('/', (req, res) => {
  res.json({ message: 'UniDeal backend is running!' });
});

// Test route — can the server reach MySQL?
app.get('/api/test-db', (req, res) => {
  pool.query('SELECT VERSION() AS version', (err, results) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ error: 'Database connection failed' });
    }
    res.json({ message: 'Database connected!', mysql_version: results[0].version });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});