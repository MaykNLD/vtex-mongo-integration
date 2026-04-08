const workoutService = require('../services/workoutService');

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkouts = await workoutService.getAllWorkouts();
        res.json({ status: "OK", data: allWorkouts });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

const getOneWorkout = async (req, res) => {
    try {
        const workout = await workoutService.getOneWorkout(req.params.workoutId);
        if (!workout) return res.status(404).json({ status: "ERROR", message: "Workout no encontrado" });
        res.json({ status: "OK", data: workout });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

const createNewWorkout = async (req, res) => {
    try {
        const { name, mode, equipment, exercises, trainerTips } = req.body;
        if (!name || !mode || !exercises) {
            return res.status(400).json({ status: "ERROR", message: "Faltan campos obligatorios: name, mode, exercises" });
        }
        const newWorkout = await workoutService.createNewWorkout({ name, mode, equipment, exercises, trainerTips });
        res.status(201).json({ status: "OK", data: newWorkout });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

const updateOneWorkout = async (req, res) => {
    try {
        const updated = await workoutService.updateOneWorkout(req.params.workoutId, req.body);
        if (!updated) return res.status(404).json({ status: "ERROR", message: "Workout no encontrado" });
        res.json({ status: "OK", data: updated });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

const deleteOneWorkout = async (req, res) => {
    try {
        const deleted = await workoutService.deleteOneWorkout(req.params.workoutId);
        if (!deleted) return res.status(404).json({ status: "ERROR", message: "Workout no encontrado" });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: error.message });
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
