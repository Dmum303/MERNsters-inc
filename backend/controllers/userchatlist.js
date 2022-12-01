const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const addChat = asyncHandler(async (req, res) => {
  User.findByIdAndUpdate(
    req.body.userId,
    {
      $push: {
        chats: {
          chat: {
            chat_id: req.body.chatId,
            user1FirstName: req.body.user1FirstName,
            user1LastName: req.body.user1LastName,
            user2FirstName: req.body.user2FirstName,
            user2LastName: req.body.user2LastName,
          },
        },
      },
    },
    { new: true },
    async function (err, docs) {
      if (err) {
        res.status(400).json({ message: 'Chat not added' });
        throw err;
      } else {
        console.log('Chat added : ');
      }
      res.status(201).send('ok');
    }
  );
});

// this should return a user object
const getChats = asyncHandler(async (req, res) => {
  User.findById(req.body.chatId, (err, doc) => {
    if (err) {
      res.status(400).json({ message: 'Chat not found' });
    }
    res.status(201).send(doc);
  });
});

module.exports = { addChat, getChats };
