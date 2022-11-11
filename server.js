const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3122;

// SECTION - CONNECT TO DATABASE
const db = require('./models');


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
    res.json({message: 'pokemon index'});
});

// (POST) - Create Pokemon
app.post('/api/v1/pokemon', (req, res) => {
    res.json({message: 'pokemon create', body: req.body});
});

// (GET) - Show Pokemon (by ID)
app.get('/api/v1/pokemon/:id',(req, res) => {
    res.json({ message: "show pokemon by id", params: req.params });
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
app.delete('/api/v1/pokemon', (req, res) => {
    res.json({
        message: 'Pokemon deleted',
        params: req.params,
    });
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

