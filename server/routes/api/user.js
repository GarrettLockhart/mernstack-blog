const router = require('express').Router();
const { getUsers, createUser, loginUser } = require('../../controllers/userController.js');

router.route('/').get(getUsers);

router.route('/new').post(createUser);

router.route('/login').post(loginUser);

module.exports = router;
