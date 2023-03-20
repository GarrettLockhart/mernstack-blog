const Post = require('../models/Post');

module.exports = {
  async getPosts(req, res) {
    try {
      const allPosts = await Post.find().select('-__v')

      if (!allPosts) {
        res.status(404).json({message: 'No posts found.'})
      }

      res.json(allPosts)
    } catch (err) {
      console.log(err)
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
        res.status(404).json({ message: 'Missing information' });
      }

      res.json(newPost);
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
};
