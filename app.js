const express = require('express');
const morgan = require('morgan');

const placeRouter = require('./routes/placeRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/places', placeRouter);

module.exports = app;
