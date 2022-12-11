const router = require('express').Router();
const api = require('./api');
const loginRoute = require('./auth');

router.use('/api', api);

router.use('/login', loginRoute);

module.exports = router;
