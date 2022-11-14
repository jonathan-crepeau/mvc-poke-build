const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// test
router.get(`/test`, controllers.trainer.test);

// GET - Index all Trainers
router.get('/', controllers.trainer.index);

// POST - Add Trainer
router.post('/', controllers.trainer.create)

// Delete Trainer

module.exports = router;