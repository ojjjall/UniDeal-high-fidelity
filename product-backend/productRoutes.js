// productRoutes.js — REST endpoints for the Product & Market module
const express = require('express');
const router = express.Router();
const controller = require('./productController');

// Base path: /api/products  (mounted in server.js)
router.get('/', controller.getProducts);        // list + search/filter
router.get('/:id', controller.getProduct);       // get one
router.post('/', controller.createProduct);       // create
router.put('/:id', controller.updateProduct);     // update
router.delete('/:id', controller.deleteProduct);  // delete

module.exports = router;
