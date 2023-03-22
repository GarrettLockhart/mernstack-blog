const router = require('express').Router();
const {
  createPost,
  getPosts,
  singlePost
} = require('../../controllers/postController');

// /api/post/all
router.route('/all').get(getPosts);

// /api/post/create
router.route('/create').post(createPost);

// /api/post/:key
router.route('/:key').get(singlePost);

module.exports = router;
