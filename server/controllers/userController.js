const { User } = require('../models');
const { signToken, authMiddleware } = require('../utils/auth');

module.exports = {
  async getUsers(req, res) {
    try {
      const allUser = await User.find();

      if (!allUser) {
        res.status(404).json({ message: 'No users found' });
      }

      res.status(200).json(allUser);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Something went wrong with getting all users' });
    }
  },
  async createUser({ body }, res) {},

  async loginUser(req, res) {}
};
