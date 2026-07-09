// productService.js — business logic + SQL queries for products
const db = require('./db');

// Get all products, with optional search + category filter
async function getAllProducts(filters = {}) {
  let sql = 'SELECT * FROM products WHERE status = "Active"';
  const params = [];

  if (filters.search) {
    sql += ' AND title LIKE ?';
    params.push(`%${filters.search}%`);
  }
  if (filters.category && filters.category !== 'All') {
    sql += ' AND category = ?';
    params.push(filters.category);
  }
  sql += ' ORDER BY created_at DESC';

  const [rows] = await db.query(sql, params);
  return rows;
}

// Get one product by id
async function getProductById(id) {
  const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0] || null;
}

// Create a new product listing
async function createProduct(data) {
  const { title, category, condition_grade, price, description, seller_name, image_url } = data;
  const [result] = await db.query(
    `INSERT INTO products (title, category, condition_grade, price, description, seller_name, image_url)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [title, category, condition_grade || 'Good', price, description || null, seller_name || null, image_url || null]
  );
  return getProductById(result.insertId);
}

// Update an existing product listing
async function updateProduct(id, data) {
  const existing = await getProductById(id);
  if (!existing) return null;

  const merged = { ...existing, ...data };
  await db.query(
    `UPDATE products
     SET title = ?, category = ?, condition_grade = ?, price = ?, description = ?, image_url = ?, status = ?
     WHERE id = ?`,
    [merged.title, merged.category, merged.condition_grade, merged.price, merged.description, merged.image_url, merged.status, id]
  );
  return getProductById(id);
}

// Delete a product listing
async function deleteProduct(id) {
  const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
  return result.affectedRows > 0;
}

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
