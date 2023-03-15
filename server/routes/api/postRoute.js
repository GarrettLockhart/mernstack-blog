const router = require('express').Router();
const { createPost } = require('../../controllers/postController');

router.route('/create').post(createPost);

module.exports = router;
