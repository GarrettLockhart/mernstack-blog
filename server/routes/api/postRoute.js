const router = require('express').Router();
const { createPost, getPosts } = require('../../controllers/postController');

// /api/post/all
router.route('/all').get(getPosts);

// /api/post/create
router.route('/create').post(createPost);


module.exports = router;
