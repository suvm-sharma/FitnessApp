const express = require('express');
const mongoose = require('mongoose');
const fitnessRoutes = require('./routes/fitnessRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
require('dotenv').config('.env');

const app = express();

mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase is connected Successfully!!');
  })
  .catch(() => {
    console.error('Error getting from DataBase');
  });

const port = process.env.PORT || 1997;

app.use(express.json());
app.use('/program', fitnessRoutes);
app.use('/exercise', exerciseRoutes);

app.listen(port, () => {
  console.log(`Port is running on ${port}...`);
});
