const mongoose = require('mongoose');

require('../mongodb_helper');
const User = require('../../models/user');
const Message = require('../../models/message');
const Chat = require('../../models/chat');

describe('Chat model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.chats.drop(() => {
      done();
    });
  });

  it('has a user in user array', (done) => {
    const user1 = new User({
      firstName: 'some',
      lastName: 'one',
      email: 'someone@example.com',
      password: 'password',
      profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
      interests: ['Sports'],
      birthday: new Date('2022-01-01'),
      gender: 'Male',
    });
    const message = new Message({
      sender: user1.id,
      recipient: user1.id,
      message: 'Hello',
    });
    const chat = new Chat({
      users: [user1],
      messages: [message],
    });
    console.log(chat);
    expect(chat.users[0].firstName).toEqual('some');
    done();
  });
});
