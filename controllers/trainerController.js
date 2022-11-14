const db = require('../models');

// GET - test
const test = (req, res) => {
    res.json(({message: 'Trainer API test route successful.'}));
};

// GET - Index All Trainers

// POST - Add Trainer



module.exports = {
    test
}