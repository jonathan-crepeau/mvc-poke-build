const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3122;

app.get('/', (req, res) => {
    res.send('The homepage.');
});

app.listen(PORT, () => {
    console.log(`Application is listening on ${PORT}...`);
});

