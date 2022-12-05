module.exports = {
  getUsers(req, res) {
    res.status(200).json({ message: 'Users' });
  }
};
