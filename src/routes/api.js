const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const vtexController = require('../controllers/vtexController');

// ========================
// USER ROUTES (MongoDB CRUD)
// ========================
// POST /api/v1/users        -> create users from payload
// PUT  /api/v1/users/:id    -> update user by id
router.post('/users', userController.createNewUser);
router.put('/users/:id', userController.updateUser);

// ========================
// VTEX INTEGRATION ROUTES
// ========================
// GET /api/v1/pedido/:id    -> fetch order from VTEX by order ID
router.get('/pedido/:id', vtexController.getPedido);

module.exports = router;
