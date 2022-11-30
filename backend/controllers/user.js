const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const addUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    profilePic,
    interests,
    birthday,
    gender,
  } = req.body;

  // checks for any missing fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !interests ||
    !birthday ||
    !gender
  ) {
    res.status(400).json({ message: 'Please fill out all fields' });
    throw new Error('Please fill out all fields');
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    throw new Error('User already exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    interests,
    birthday,
    gender,
  });

  profilePic && (user.profilePic = profilePic);

  user.save();

  res.status(201).json({
    message: 'Make user',
    firstName: user.firstName,
    email: user.email,
    token: generateToken(user._id),
  });
});

const getMe = asyncHandler(async (req, res) => {
  res.send('user data');
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Please fill out all fields' });
    throw new Error('Please fill out all fields');
  }

  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profilePic: user.profilePic,
      interests: user.interests,
      birthday: user.birthday,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
    throw new Error('Invalid email or password');
  }
});

const generateToken = (id) => {
  console.log(process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password');
  console.log(users);
  res.json(users);
});

module.exports = { addUser, getMe, loginUser, getAllUsers };
