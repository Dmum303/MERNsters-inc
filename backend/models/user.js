const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: {
    type: String,
    required: true,
    default: 'https://i.imgur.com/1Q9ZQ9u.png',
  },
  interests: { type: Array, required: true },
  birthday: { type: Date, required: true },
  gender: { type: String, required: true },
});

//hashes and salts a password

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (!isMatch) {
        return reject(false);
      }
      resolve(true);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
