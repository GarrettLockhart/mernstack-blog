const { User, userSchema } = require('../models');
const { generateAccessToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

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
  async createUser(req, res) {
    const { firstName, lastName, email, password } = req.body;

    try {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password
      });

      if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Missing information' });
      }

      const token = generateAccessToken(newUser);
      res.json(token);
    } catch (err) {
      console.log(err);
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email: email });

      if (!user) {
        res.status(404).json({ message: 'No user found' });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(400).json({ message: 'Incorrect password' });
      }

      const token = generateAccessToken(user);
      res.json(token);
    } catch (err) {
      console.log(err);
    }
  }
};
