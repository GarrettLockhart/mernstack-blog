const router = require('express').Router();
const { loginUser } = require('../../controllers/userController');

router.route('/').post(loginUser);

module.exports = router;
