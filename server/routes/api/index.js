const router = require('express').Router();
const userRoute = require('./user');

router.get('/user', userRoute);

module.exports = router;
