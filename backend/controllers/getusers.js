const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const getUsers = asyncHandler(async (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.status(400).json({ message: 'Error' });
    }
    res.status(201).json(users);
  });
});

module.exports = { getUsers };
