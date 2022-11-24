const mongoose = require('mongoose');

require('../mongodb_helper');
const User = require('../../models/user');
const Message = require('../../models/message');
describe('Message model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.messages.drop(() => {
      done();
    });
  });

  it('has a sender', (done) => {
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
    expect(message.sender.toString()).toEqual(user1.id);
    done();
  });

  it('has a recipient', (done) => {
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
    expect(message.recipient.toString()).toEqual(user1.id);
    done();
  });

  it('has a message', (done) => {
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
    expect(message.message).toEqual('Hello');
    done();
  });

  it('can list all messages', (done) => {
    Message.find((err, messages) => {
      expect(err).toBeNull();
      expect(messages).toEqual([]);
      done();
    });
  });

  it('Saves in DB', (done) => {
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
    message.save((err) => {
      expect(err).toBeNull();
      Message.find((err, messages) => {
        expect(err).toBeNull();
        expect(messages.length).toEqual(1);
        expect(messages[0].message).toEqual('Hello');
        done();
      });
    });
  });
});
