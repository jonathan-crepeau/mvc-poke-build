const db = require('../models');

const test = (req, res) => {
    res.json(({ message: 'API test successful.'}));
}

module.exports = {
    test
}