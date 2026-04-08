const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const vtexController = require('../controllers/vtexController');
const workoutController = require('../controllers/workoutController');

// ========================
// USER ROUTES (MongoDB CRUD)
// ========================
router.post('/users', userController.createNewUser);
router.put('/users/:id', userController.updateUser);

// ========================
// WORKOUT ROUTES (Full CRUD)
// ========================
// GET  /api/v1/workouts         -> todos los workouts
// GET  /api/v1/workouts/:id     -> uno por id
// POST /api/v1/workouts         -> crear
// PUT  /api/v1/workouts/:id     -> actualizar
// DEL  /api/v1/workouts/:id     -> eliminar
router.get('/workouts', workoutController.getAllWorkouts);
router.get('/workouts/:workoutId', workoutController.getOneWorkout);
router.post('/workouts', workoutController.createNewWorkout);
router.put('/workouts/:workoutId', workoutController.updateOneWorkout);
router.delete('/workouts/:workoutId', workoutController.deleteOneWorkout);

// ========================
// VTEX INTEGRATION ROUTES
// ========================
router.get('/pedido/:id', vtexController.getPedido);

module.exports = router;
