const express = require('express');
const path = require('path');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));



// Serve static assets in production
if (process.env.NODE_ENV === 'db') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
}

