const express = require('express');
const server = express();

// Middleware
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

// Helpers
const corsConfig = require('./config/corsConfig');

server.use(logger('dev'));
server.use(cors(corsConfig));
server.use(helmet());
// Parses incoming requests w/ JSON payloads
server.use(express.json());

// @TODO: remove once routes are in place
// Just to initially test if server is running properly
server.get('/', (req, res) => {
    res.send('WOO! It works!');
});

module.exports = server;