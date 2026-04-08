require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');
const { seedWorkouts } = require('./services/workoutService');

const app = express();
const PORT = process.env.PORT || 3000;

// Conecta DB y luego arranca el seed + servidor
connectDB().then(async () => {
    await seedWorkouts();

    app.use(express.json());

    // Health check
    app.get('/health', (req, res) => {
        res.json({ status: 'UP', timestamp: new Date().toISOString() });
    });

    // Rutas principales
    app.use('/api/v1', apiRoutes);

    // Manejo de rutas no encontradas
    app.use((req, res) => {
        res.status(404).json({ status: 'ERROR', message: `Ruta ${req.originalUrl} no encontrada` });
    });

    app.listen(PORT, () => {
        console.log(`[Server] Corriendo en http://localhost:${PORT}`);
        console.log(`[Routes] GET  /api/v1/workouts`);
        console.log(`[Routes] POST /api/v1/workouts`);
        console.log(`[Routes] PUT  /api/v1/workouts/:id`);
        console.log(`[Routes] DEL  /api/v1/workouts/:id`);
        console.log(`[Routes] GET  /api/v1/pedido/:id   (VTEX connector)`);
        console.log(`[Routes] POST /api/v1/users`);
    });
});
