const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./config/connection');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

module.exports = app;
