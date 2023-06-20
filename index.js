const PORT = 3000;
const express = require('express');
const app = express();
const http = require('http').Server(app);
var fs = require('fs');
const path = require('path');
const cors = require('cors');

// Express middleware
app.use(cors());
app.use(express.static(__dirname + '/build'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Initialize HTTP listening
const server = http.listen(PORT, () => {
    console.log("Server listening on port: " + PORT);
});

// Listen to termination and close app
process.on('SIGINT', () => {
    // Stop the server
    server.close(() => {
        console.log('Server stopped listening.');
        process.exit(0);
    });
});