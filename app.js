const express = require('express');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


const tourRouter = require('./Routes/tourRouts');
const userRouter = require('./Routes/userRouts');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;