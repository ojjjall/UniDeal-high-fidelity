// server.js — entry point for the Product & Market backend API
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./productRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'UniDeal Product & Market API is running' });
});

// Product & Market module routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Product & Market API running on http://localhost:${PORT}`);
});
