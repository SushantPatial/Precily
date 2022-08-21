require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
var path = require('path');

const app = express();

// Database connection 
require('./database/connection');

// Routes
const router = require('./routes/router');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ credentials: true, origin: ['https://clinquant-marigold-09f877.netlify.app', 'http://localhost:3000'] }));
app.use('/api', router);

// Server
app.listen(port, function() {
    console.log("Server started at port " + port);
});
  