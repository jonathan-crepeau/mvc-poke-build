const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// index

// create

// show --> id === pokemon id

// update --> id === pokemon id

// delete --> id === pokemon id

// test route
router.get('/test', controllers.pokemon.test);

module.exports = router;