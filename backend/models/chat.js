const mongoose = require('mongoose');
const Message = require('./message');
const User = require('./user');

const chatSchema = new mongoose.Schema({
  users: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ],
  messages: [
    {
      message: {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        recipient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        message: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    },
  ],
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
