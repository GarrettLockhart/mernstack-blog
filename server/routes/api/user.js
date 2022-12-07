const router = require('express').Router();
const { getUsers, createUser } = require('../../controllers/userController.js');

router.route('/').get(getUsers);

router.route('/new').post(createUser);

module.exports = router;
