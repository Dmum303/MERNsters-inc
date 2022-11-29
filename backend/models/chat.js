const mongoose = require('mongoose');
const Message = require('./message');
const User = require('./user');

// the chat model has a array for users in the chat
// and a array for messages in the chat

const chatSchema = new mongoose.Schema({
  users: {
      user1: {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
      user2: {
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
    },
  messages: [
    {
      message: {
        sender: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        senderName: { type: String, 
          required: true 
        },
        recipient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        recipientName: { type: String, 
          required: true 
        },
        text: { type: String, required: true },
        // createdAt: { type: Date, default: Date.now },
         createdAt: { type: String, default: Date().toLocaleString() },
      },
    },
  ],
});



const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
