const db = require('../models');

// GET - test
const test = (req, res) => {
    res.json(({message: 'Trainer API test route successful.'}));
};

// GET - Index All Trainers
const index = (req, res) => {
    db.Trainer.find({}, (err, foundTrainers) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong here...',
            error: err,
        });
        res.json(foundTrainers);
    });
};

// POST - Add Trainer
const create = (req, res) => {
    db.Trainer.create(req.body, (err, newTrainer) => {
        if (err) return res.status(500).json({
            message: 'Something went wrong here...',
            error: err,
        });
        res.json(newTrainer);
    })
}


module.exports = {
    test,
    create,
    index
}