const router = require('express').Router();
const { loginUser } = require('../controllers/userController');

// /login/new

router.route('/new').post(loginUser);

module.exports = router;
