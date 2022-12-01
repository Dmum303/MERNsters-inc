const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Chat = require('../models/chat');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('../models/user');

dotenv.config();
// No token implementation yet

const getChat = asyncHandler(async (req, res) => {
  // not sure if this is the right way to do this, should it have some
  //async in the below funtion?
  Chat.findById(req.body.objectId, (err, chat) => {
    if (err) {
      res.status(400).json({ message: 'Chat not found' });
    }
    res.status(201).send(chat);
  });
});

const createChat = asyncHandler(async (req, res) => {
  console.log(req);
  const chat = new Chat({
    users: {
      user1: {
        user_id: req.body.userId1,
        firstName: req.body.firstName1,
        lastName: req.body.lastName1,
      },
      user2: {
        user_id: req.body.userId2,
        firstName: req.body.firstName2,
        lastName: req.body.lastName2,
      },
    },
    messages: [
      {
        message: {
          sender: req.body.senderId,
          senderName: req.body.senderName,
          recipient: req.body.recipientId,
          recipientName: req.body.recipientName,
          text: req.body.text,
        },
      },
    ],
  });
  User.findByIdAndUpdate(
    req.body.userId2,
    {
      $push: {
        chats: {
          chat: {
            chat_id: chat._id,
            user1FirstName: req.body.firstName2,
            user1LastName: req.body.lastName2,
            user2FirstName: req.body.firstName1,
            user2LastName: req.body.lastName1,
          },
        },
      },
    },
    { new: true },
    async function (err) {
      if (err) {
        console.log('Chat not added');
        throw err;
      } else {
        console.log('Chat added to user 2 array: ');
      }
    }
  );
  User.findByIdAndUpdate(
    req.body.userId1,
    {
      $push: {
        chats: {
          chat: {
            chat_id: chat._id,
            user1FirstName: req.body.firstName1,
            user1LastName: req.body.lastName1,
            user2FirstName: req.body.firstName2,
            user2LastName: req.body.lastName2,
          },
        },
      },
    },
    { new: true },
    async function (err) {
      if (err) {
        console.log('Chat not added');
        throw err;
      } else {
        console.log('Chat added to user 1 array:: ');
      }
    }
  );
  chat.save(async (err) => {
    if (err) {
      res.status(400).json({ message: 'Chat not created' });
      throw err;
    }
    res.status(201).json({ message: 'ok' });
    console.log('Chat created : ');
  });
});

// this will crash the server if bad info
const addMessage = asyncHandler(async (req, res) => {
  console.log(req.body.text);
  Chat.findByIdAndUpdate(
    req.body.objectId,
    {
      $push: {
        messages: {
          message: {
            sender: req.body.senderId,
            senderName: req.body.senderName,
            recipient: req.body.recipientId,
            recipientName: req.body.recipientName,
            text: req.body.text,
          },
        },
      },
    },
    { new: true },
    async function (err, docs) {
      if (err) {
        res.status(400).json({ message: 'Msg not added' });
        throw err;
      } else {
        console.log('New msg added : ');
      }
      res.status(201).json({ message: 'ok' });
    }
  );
});

module.exports = { getChat, createChat, addMessage };
