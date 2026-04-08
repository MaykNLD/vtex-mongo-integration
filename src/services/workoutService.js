const Workout = require('../models/Workout');
const { v4: uuidv4 } = require('uuid');

// Seed de datos del db.json original para poblado inicial
const seedData = [
    { id: "61dbae02-c147-4e28-863c-db7bd402b2d6", name: "Tommy V", mode: "For Time", equipment: ["barbell","rope"], exercises: ["21 thrusters","12 rope climbs, 15 ft","15 thrusters","9 rope climbs, 15 ft","9 thrusters","6 rope climbs, 15 ft"], trainerTips: ["Split the 21 thrusters as needed","Try to do the 9 and 6 thrusters unbroken","RX Weights: 115lb/75lb"] },
    { id: "4a3d9aaa-608c-49a7-a004-66305ad4ab50", name: "Dead Push-Ups", mode: "AMRAP 10", equipment: ["barbell"], exercises: ["15 deadlifts","15 hand-release push-ups"], trainerTips: ["Deadlifts are meant to be light and fast","Try to aim for unbroken sets","RX Weights: 135lb/95lb"] },
    { id: "d8be2362-7b68-4ea4-a1f6-03f8bc4eede7", name: "Heavy DT", mode: "5 Rounds For Time", equipment: ["barbell","rope"], exercises: ["12 deadlifts","9 hang power cleans","6 push jerks"], trainerTips: ["Aim for unbroken push jerks","The first three rounds might feel terrible, but stick to it","RX Weights: 205lb/145lb"] },
    { id: "a24d2618-01d1-4682-9288-8de1343e53c7", name: "Core Buster", mode: "AMRAP 20", equipment: ["rack","barbell","abmat"], exercises: ["15 toes to bars","10 thrusters","30 abmat sit-ups"], trainerTips: ["Split your toes to bars in two sets maximum","Go unbroken on the thrusters","Take the abmat sit-ups as a chance to normalize your breath"] },
    { id: "8f8318f8-b869-4e9d-bb78-88010193563a", name: "Jumping (Not) Made Easy", mode: "AMRAP 12", equipment: ["jump rope"], exercises: ["10 burpees","25 double-unders"], trainerTips: ["Scale to do 50 single-unders, if double-unders are too difficult"] },
    { id: "0a5948af-5185-4266-8c4b-818889657e9d", name: "Burpee Meters", mode: "3 Rounds For Time", equipment: ["Row Erg"], exercises: ["Row 500 meters","21 burpees","Run 400 meters","Rest 3 minutes"], trainerTips: ["Go hard","Note your time after the first run","Try to hold your pace"] },
    { id: "3dc53bc8-27b8-4773-b85d-89f0a354d437", name: "Dumbbell Rower", mode: "AMRAP 15", equipment: ["Dumbbell"], exercises: ["15 dumbbell rows, left arm","15 dumbbell rows, right arm","50-ft handstand walk"], trainerTips: ["RX weights for women: 35-lb","RX weights for men: 50-lb"] }
];

const seedWorkouts = async () => {
    const count = await Workout.countDocuments();
    if (count === 0) {
        await Workout.insertMany(seedData);
        console.log('[Seed] Workouts iniciales cargados');
    }
};

const getAllWorkouts = async () => {
    return await Workout.find({});
};

const getOneWorkout = async (workoutId) => {
    return await Workout.findOne({ id: workoutId });
};

const createNewWorkout = async (newWorkout) => {
    const workout = new Workout({ ...newWorkout, id: uuidv4() });
    return await workout.save();
};

const updateOneWorkout = async (workoutId, changes) => {
    return await Workout.findOneAndUpdate(
        { id: workoutId },
        { $set: { ...changes, updatedAt: new Date() } },
        { new: true }
    );
};

const deleteOneWorkout = async (workoutId) => {
    return await Workout.findOneAndDelete({ id: workoutId });
};

module.exports = {
    seedWorkouts,
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};
