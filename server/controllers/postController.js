const Post = require('../models/Post');

module.exports = {
  async getPosts(req, res) {
    try {
      const allPosts = await Post.find().select('-__v');

      if (!allPosts) {
        res.status(404).json({ message: 'No posts found.' });
      }

      res.json(allPosts);
    } catch (err) {
      console.log(err);
    }
  },

  async createPost(req, res) {
    const { title, content } = req.body;

    try {
      const newPost = await Post.create({
        title: title,
        content: content
      });

      if (!title || !content) {
        res.status(404).json({ message: 'Error creating post' });
      }

      res.json(newPost);
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  },

  async singlePost(req, res) {
    const { key } = req.params;
    console.log('🚀 ~ file: postController.js:39 ~ singlePost ~ key:', key);

    try {
      const singlePost = await Post.findById(key);

      if (!key) {
        res.status(404).json({ message: 'Error with single post' });
      }
      res.json(singlePost);
    } catch (err) {
      console.log(err);
    }
  }
};
