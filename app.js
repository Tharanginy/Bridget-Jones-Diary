const express = require('express');
const app = express();
app.use(express.json());

const entryRoutes = require('./routes/entries');
app.use('/entries', entryRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
