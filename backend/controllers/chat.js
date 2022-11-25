const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Chat = require('../models/chat');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const getChat = asyncHandler(async (req, res) => {
  Chat.findById(req.body.objectId, (err, chat) => {
    if (err) {
      res.status(400).json({ message: 'Chat not found' });
    }
    res.send(chat);
  });
});

const createChat = asyncHandler(async (req, res) => {
  res.send('createChat');
  console.log(req.body.userId);
  const chat = new Chat({
    users: [
      {
        user: {
          user_id: '6380b30f83141a9fd30a7662',
          firstName: 'New',
          lastName: 'User',
        },
      },
    ],
    messages: [
      {
        message: {
          sender: '6380b30f83141a9fd30a7662',
          recipient: '6380b30f83141a9fd30a7662',
          text: "Here's some text",
        },
      },
    ],
  });
  chat.save();
});

//   Index: (req, res) => {
//     Post.find(async (err, posts) => {
//       if (err) {
//         throw err;
//       }
//     })
//       .populate('poster')
//       .exec()
//       .then(async (posts) => {
//         console.log(posts);
//         const token = await TokenGenerator.jsonwebtoken(req.user_id);
//         res.status(200).json({ posts: posts, token: token });
//       });
//   },

// const createChat = asyncHandler(async (req, res) => {
//   res.send('You have reached the create chat');
// });

const addMessage = asyncHandler(async (req, res) => {
  res.send('You have reached the add msg chat');
});

module.exports = { getChat, createChat, addMessage };
