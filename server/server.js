const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error ${err}`);
  } else {
    console.log(`Server listening on ${PORT}`);
  }
});

module.exports = app;
