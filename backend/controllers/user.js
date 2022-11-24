const User = require('../models/user');

const addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send('Make user');
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Bad request' });
  }
};

module.exports = { addUser };
