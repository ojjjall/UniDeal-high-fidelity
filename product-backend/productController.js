// productController.js — request handlers for the Product & Market module
const productService = require('./productService');

// GET /api/products
async function getProducts(req, res) {
  try {
    const products = await productService.getAllProducts({
      search: req.query.search,
      category: req.query.category,
    });
    res.json({ success: true, count: products.length, data: products });
  } catch (err) {
    console.error('getProducts error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch products' });
  }
}

// GET /api/products/:id
async function getProduct(req, res) {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    console.error('getProduct error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to fetch product' });
  }
}

// POST /api/products
async function createProduct(req, res) {
  try {
    const { title, category, price } = req.body;
    if (!title || !category || price === undefined || price === null) {
      return res.status(400).json({ success: false, message: 'title, category and price are required' });
    }
    if (Number(price) < 0) {
      return res.status(400).json({ success: false, message: 'price must be 0 or greater' });
    }
    const created = await productService.createProduct(req.body);
    res.status(201).json({ success: true, message: 'Product created', data: created });
  } catch (err) {
    console.error('createProduct error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to create product' });
  }
}

// PUT /api/products/:id
async function updateProduct(req, res) {
  try {
    const updated = await productService.updateProduct(req.params.id, req.body);
    if (!updated) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product updated', data: updated });
  } catch (err) {
    console.error('updateProduct error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to update product' });
  }
}

// DELETE /api/products/:id
async function deleteProduct(req, res) {
  try {
    const ok = await productService.deleteProduct(req.params.id);
    if (!ok) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    console.error('deleteProduct error:', err.message);
    res.status(500).json({ success: false, message: 'Failed to delete product' });
  }
}

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
