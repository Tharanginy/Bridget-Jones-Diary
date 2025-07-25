const express = require('express');
const cors = require('cors'); 
const logger = require('./logger'); 
const router = require('./routers/entries') 

const app = express();
app.use(cors()); 
app.use(logger); 
app.use('/entries', router);

module.exports = app