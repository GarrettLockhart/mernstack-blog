const router = require('express').Router();
const { getUsers } = require('../../controllers/userController.js');

router.route('/user').get(getUsers);

module.exports = router;
