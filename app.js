const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Use morgan for logging in development mode
}

const tourRouter = require('./Routes/tourRouts');
const userRouter = require('./Routes/userRouts');

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
