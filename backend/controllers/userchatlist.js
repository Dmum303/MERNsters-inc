const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

// not in use yet
const addChat = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'ok jimbo' });
});

const getChats = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'ok sonny' });
});

module.exports = { addChat, getChats };
