const db = require('../models');

// GET - Test
const test = (req, res) => {
    res.json(({ message: 'API test successful.'}));
}

// - List All Pokemon
const index = (req, res) => {
    db.Pokemon.find({}, (err, allPokemon) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong.',
            error: err,
        });
        const responseObj = {
            status: 200,
            data: allPokemon,
            length: allPokemon.length,
            requestedAt: new Date().toLocaleString()
        };
        res.status(200).json(responseObj);
    });
};

// Create Pokemon
const create = (req, res) => {
    const newPokemon = req.body;
    db.Pokemon.create(newPokemon, (err, createdPokemon) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong.',
            error: err,
        });
        const responseObj = {
            status: 200,
            data: createdPokemon,
            requestedAt: new Date().toLocaleString()
        };
        res.status(200).json(responseObj);
    });
};

// List Single Pokemon
const show = (req, res) => {
    db.Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if (err) return res.status(400).json({
            message: 'Something went wrong',
            error: err,
        });
        res.json(foundPokemon);
    });
};

// Update Pokemon
const update = (req, res) => {
    db.Pokemon.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (err, updatedPokemon) => {
            if (err) return res.status(400).json({
                message: "Something went wrong.",
                error: err,
            });
            res.json(updatedPokemon);
        }
    );
};

// Delete Pokemon
const destroy = (req, res) => {
    db.Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
        if (err) return res.status(400).json(err);
        res.json(deletedPokemon);
    })
};

module.exports = {
    test,
    index,
    create,
    show,
    update,
    destroy
}