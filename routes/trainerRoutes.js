const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const API = '/api/v1/trainers';

// test
router.get(`/test`, controllers.trainer.test);

// POST - Add Pokemon
router.get('/')

module.exports = router;