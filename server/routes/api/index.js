const router = require('express').Router();
const userRoutes = require('./user');

// api/user

router.use('/user', userRoutes);

module.exports = router;
