require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.use(express.json());

    // Health check
    app.get('/health', (req, res) => {
        res.json({ status: 'UP', timestamp: new Date().toISOString() });
    });

    // Main routes
    app.use('/api/v1', apiRoutes);

    // 404 handler
    app.use((req, res) => {
        res.status(404).json({ status: 'ERROR', message: `Route ${req.originalUrl} not found` });
    });

    app.listen(PORT, () => {
        console.log(`[Server] Running at http://localhost:${PORT}`);
        console.log('[Routes] POST /api/v1/users');
        console.log('[Routes] PUT  /api/v1/users/:id');
        console.log('[Routes] GET  /api/v1/pedido/:id  (VTEX connector)');
        console.log('[Routes] GET  /health');
    });
});
