const mongoose = require('mongoose');

require('../mongodb_helper');
const User = require('../../models/user');

const Chat = require('../../models/chat');

describe('Chat model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.chats.drop(() => {
      done();
    });
  });

  it('has a user with correct info in arrary in user array', (done) => {
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
    const chat = new Chat({
      users: [
        { user: { user_id: user1.id, firstName: 'some', lastName: 'one' } },
      ],
      messages: [
        {
          message: { sender: user1.id, recipient: user1.id, text: 'Hello' },
        },
      ],
    });
    expect(chat.users[0].user.firstName).toEqual('some');
    expect(chat.users[0].user.lastName).toEqual('one');
    done();
  });

  it('has a message with correct info in arrary in message array', (done) => {
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
    const chat = new Chat({
      users: [
        { user: { user_id: user1.id, firstName: 'some', lastName: 'one' } },
      ],
      messages: [
        {
          message: { sender: user1.id, recipient: user1.id, text: 'Hello' },
        },
      ],
    });
    console.log(user1.id);
    expect(chat.messages[0].message.text).toEqual('Hello');
    expect(chat.messages[0].message.recipient.toString()).toEqual(user1.id);
    done();
  });

  it('Saves chat object to chats db and can find in db', (done) => {
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
    const chat = new Chat({
      users: [
        { user: { user_id: user1.id, firstName: 'some', lastName: 'one' } },
      ],
      messages: [
        {
          message: { sender: user1.id, recipient: user1.id, text: 'Hello' },
        },
      ],
    });
    chat.save((err) => {
      expect(err).toBeNull();
      Chat.find((err, chats) => {
        expect(chats.length).toEqual(1);
        expect(chats[0].messages[0].message.text).toEqual('Hello');
        expect(chats[0].users[0].user.firstName).toEqual('some');
        expect(err).toBeNull();

        done();
      });
    });
  });

  it('Saves and finds chat by object id', (done) => {
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
    const chat = new Chat({
      users: [
        { user: { user_id: user1.id, firstName: 'some', lastName: 'one' } },
      ],
      messages: [
        {
          message: { sender: user1.id, recipient: user1.id, text: 'Hello' },
        },
      ],
    });
    console.log(user1.id);
    chat.save((err) => {
      expect(err).toBeNull();
      Chat.findById(chat.id, (err, chat) => {
        expect(chat.messages[0].message.text).toEqual('Hello');
        expect(chat.users[0].user.firstName).toEqual('some');
        expect(err).toBeNull();

        done();
      });
    });
  });
});

// {
//       users: [
//         { user: { user_id: "6380b30f83141a9fd30a7662", firstName: 'John', lastName: 'Smith' } },
//       ],
//       messages: [
//         {
//           message: { sender: "6380b30f83141a9fd30a7662", recipient: "6380b30f83141a9fd30a7662", text: 'Hello World!' },
//         },
//       ],
//     }
