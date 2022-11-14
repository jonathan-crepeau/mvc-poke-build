const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: Number,
    hairColor: String,
    eyeColor: String,
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;