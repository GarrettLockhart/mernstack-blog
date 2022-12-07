const { User } = require('../models');
const { signToken } = require('../utils/auth');

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
  }
};
