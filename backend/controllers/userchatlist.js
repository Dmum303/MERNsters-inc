const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

// not in use yet - half built
const addChat = asyncHandler(async (req, res) => {
  User.findByIdAndUpdate(req.body.userId, {
    $push: {
      chats: {
        chat: { chat_id: req.body.chatId },
      },
    },
  });
});

const getChats = asyncHandler(async (req, res) => {
  res.status(201).json({ message: 'ok sonny' });
});

module.exports = { addChat, getChats };
