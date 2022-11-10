const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3122;


// SECTION - SERVE STATIC
app.use(express.static(`${__dirname}/public`));

// SECTION - MIDDLEWARE


// SECTION - VIEW ROUTES
// Root Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


// SECTION - API ENDPOINT ROUTES


// SETION - 404 ROUTE
app.get('/*', (req, res) => {
    res.send(`
        <h1> ERROR - File or Page not found.</h1>
        <li><a href="/">[ Return to Homepage ]</a></li>
    `);
});

// SECTION - START SERVER
app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});

