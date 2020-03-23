const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/recipes', require('./routes/recipe'));
app.use('/api/v1/attempts', require('./routes/attempt'));

module.exports = app;
