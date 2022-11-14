const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
const API = '/api/v1/pokemon';

// index
router.get(`/`, controllers.pokemon.index);

// create
router.post(`/`, controllers.pokemon.create);

// show --> id === pokemon id
router.get(`/:id`, controllers.pokemon.show)

// update --> id === pokemon id
router.put(`/:id`, controllers.pokemon.update)

// delete --> id === pokemon id
router.delete(`/:id`, controllers.pokemon.destroy)

// test route
router.get(`/test`, controllers.pokemon.test);

module.exports = router;