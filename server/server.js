const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes/index');
require('dotenv').config();

const app = express();

const { PORT = 3001 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
});
