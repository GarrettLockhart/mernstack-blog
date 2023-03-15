const router = require('express').Router();
const userRoutes = require('./user');
const postRoutes = require('./postRoute');

// api/user

router.use('/user', userRoutes);

// api/post

router.use('/post', postRoutes)

module.exports = router;
