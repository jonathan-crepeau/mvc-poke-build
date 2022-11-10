const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: [String],
    gender: String,
    attacks: [String],
    pokedexNumber: { type: Number, required: true },
    description: String,
    weakness: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;