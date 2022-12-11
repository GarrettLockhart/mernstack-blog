const router = require('express').Router();
const userRoutes = require('./user');
const loginRoutes = require('./auth');

router.use('/user', userRoutes);

router.use('/login', loginRoutes);

module.exports = router;
