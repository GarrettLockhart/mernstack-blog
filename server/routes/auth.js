const router = require('express').Router();
const { loginUser } = require('../controllers/userController');

router.route('/new').post(loginUser);

module.exports = router;
