// SECTION - SETUP
// External Modules
const express = require('express');
const path = require('path');
// Internal Modules
const db = require('./models');
// Instanced Modules
const app = express();
// Configuration Variables
const PORT = process.env.PORT || 3122;


// SECTION - SERVE STATIC
app.use(express.static(`${__dirname}/public`));


// SECTION - MIDDLEWARE
// This creates our request.body
app.use(express.json());


// SECTION - VIEW ROUTES
// Root Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

// List of All Pokemon Route
app.get('/pokemon', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/listPokemon.html'))
});

// Add A Pokemon w/ Form Route
app.get('/pokemon/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/addPokemon.html'))
});


// ANCHOR - API ENDPOINT ROUTES

// Documentation Route
app.get('/api/v1', (req, res) => {
    const doc = {
        status: 200,
        message: 'Welcome to Pokedex API',
        endpoints: {
            method: 'GET',
            path: '/api/v1',
            description: 'Describes all available endpoints'
        }
    }
    res.json(doc);
});


// SECTION - Pokemon Routes
// (GET) - Index All Pokemon
app.get('/api/v1/pokemon', (req, res) => {
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
});

// (POST) - Create Pokemon
app.post('/api/v1/pokemon', (req, res) => {
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
});

// (GET) - Show Pokemon (by ID)
app.get('/api/v1/pokemon/:id',(req, res) => {
    db.Pokemon.findById(req.params.id, (err, foundPokemon) => {
        if (err) return res.status(400).json({
            message: 'Something went wrong',
            error: err,
        });
        res.json(foundPokemon);
    });
});

// (PUT) - Update Pokemon
app.put('/api/v1/pokemon/:id', (req, res) => {
    res.json({
        message: 'Pokemon updated',
        params: req.params,
        body: req.body,
    });
});

// (DELETE) - Delete Pokemon
app.delete('/api/v1/pokemon/:id', (req, res) => {
    db.Pokemon.findByIdAndDelete(req.params.id, (err, deletedPokemon) => {
        if (err) return res.status(400).json(err);
        res.json(deletedPokemon);
    })
});

// SECTION - Trainer Routes


// SECTION - 404 ROUTE
app.get('/*', (req, res) => {
    res.status(404)
    res.send(`
        <h1> ERROR - File or Page not found.</h1>
        <li><a href="/">[ Return to Homepage ]</a></li>
    `);
});

// SECTION - START SERVER
app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});

