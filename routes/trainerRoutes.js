const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// test
router.get(`/test`, controllers.trainer.test);

// POST - Add Pokemon
router.post('/', controllers.trainer.create)

module.exports = router;