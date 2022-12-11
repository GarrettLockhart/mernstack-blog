const { User } = require('../models');
const { generateAccessToken } = require('../utils/auth');

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

  async loginUser(req, res) {
    try {
      const { email } = req.body;

      const user = await User.findOne({ email: email });

      if (!user) {
        res.status(404).json({ message: 'No user found' });
      }
      const token = generateAccessToken(user);
      res.json(token);
    } catch (err) {
      console.log(err);
    }
  }
};
