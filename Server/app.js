const express = require('express');
const cors = require('cors'); 
const logger = require('./logger'); 
const router = require('./routers/entries') 



const app = express();
app.use(express.json());
app.use(cors()); 
app.use(logger); 
app.use('/entries', router);
app.use('/diary', router);



app.get('/', (req, res) => {
res.send('Bridget Jones Diary API is running!');
});


module.exports = app