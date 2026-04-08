const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const workoutSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    name: { type: String, required: true, trim: true },
    mode: { type: String, required: true },
    equipment: { type: [String], default: [] },
    exercises: { type: [String], required: true },
    trainerTips: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('Workout', workoutSchema);
