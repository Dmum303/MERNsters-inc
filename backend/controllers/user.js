const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');

const addUser = asyncHandler(async (req, res) => { 
const { 
  firstName, lastName, email, password, profilePic,
  interests, birthday, gender,
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
  token: 'add-token-here',
});
});

const getMe = asyncHandler(async (req, res) => {
  res.send(req.user);
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({message: 'Please fill out all fields'});
    throw new Error('Please fill out all fields');
  }

  const user = await User.findOne({
    email
  });



  if (user && password === user.password) {
    // let token = generateToken(user._id);
    // console.log(token);

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profilePic: user.profilePic,
      interests: user.interests,
      birthday: user.birthday,
      token: 'add-token-here',
    })
  }
  else {
    res.status(401).json({message: 'Invalid email or password'});
    throw new Error('Invalid email or password');
  }
})

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

module.exports = { addUser, getMe, loginUser };
