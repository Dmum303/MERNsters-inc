const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePic: { type: String, required: true, default: 'https://i.imgur.com/1Q9ZQ9u.png' },
  interests: { type: Array, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);