const { User } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth');

module.exports = {
  getUsers(req, res) {
    res.status(200).json({ message: 'User Route' });
  },
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  async loginUser(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        res.status(404).json({ message: 'No user found with that email' });
      }

      const checkPassword = await user.isCorrectPassword(user.password);

      if (!checkPassword) {
        res.status(500).json({ message: 'Something went wrong' });
      }

      const token = signToken(user.email);
      res.json(token);
      return { token, user };
    } catch (err) {
      console.log(err);
    }
  }
};
