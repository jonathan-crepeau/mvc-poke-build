// SECTION - SETUP
// External Modules
const express = require('express');
const path = require('path');
// Internal Modules
const routes = require('./routes');
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

// NOTE - Pokemon View Routes

// List of All Pokemon Route
app.get('/pokemon', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/listPokemon.html'))
});

// Add A Pokemon w/ Form Route
app.get('/pokemon/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/addPokemon.html'))
});

// NOTE - Trainer View Routes
app.get('/trainer/new', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/addTrainer.html'));
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
app.use('/api/v1/pokemon', routes.pokemon);


// SECTION - Trainer Routes
app.use('/api/v1/trainers', routes.trainer);


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

