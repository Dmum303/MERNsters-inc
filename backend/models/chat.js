const mongoose = require('mongoose');
const Message = require('./message');
const User = require('./user');

const chatSchema = new mongoose.Schema({
  users: [
    {
      user: {
        type: mongoose.ObjectId,
        ref: 'User',
        required: true,
      },
    },
  ],
  messages: [
    {
      message: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Message',
      },
    },
  ],
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
