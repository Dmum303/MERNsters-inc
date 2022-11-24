const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

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

 if (!firstName || !lastName || !email || !password
  || !profilePic || !interests || !birthday || !gender) {
    res.status(400).json({message: 'Please fill out all fields'});
    throw new Error('Please fill out all fields');
  }

  const userExists = await User.findOne({email});

  if (userExists) {
    res.status(400).json({message: 'User already exists'});
    throw new Error('User already exists');
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    profilePic,
    interests,
    birthday,
    gender,
  })
  user.save();

res.status(201).json({
  message: 'Make user',
  firstName: user.firstName,
  email: user.email,
});
});

const getMe = asyncHandler(async (req, res) => {
  res.send(req.user);
})

const loginUser = asyncHandler(async (req, res) => {
  try {
    res.send('login user');
  } catch (error) {
    res.status(400).send('Unable to login');
  }
})

module.exports = { addUser, getMe, loginUser };
