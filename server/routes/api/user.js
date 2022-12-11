const router = require('express').Router();
const { getUsers, createUser } = require('../../controllers/userController.js');

// api/user/

router.route('/').get(getUsers);

// api/user/new

router.route('/create').post(createUser);

module.exports = router;
