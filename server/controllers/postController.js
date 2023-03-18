const Post = require('../models/Post');

module.exports = {
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
