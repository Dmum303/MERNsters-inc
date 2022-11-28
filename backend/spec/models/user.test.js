const mongoose = require('mongoose');

require('backend/spec/mongodb_helper');
// require('simple-mongodb-helper');
const User = require('../../models/user');

describe('User model', () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it('has an email address', () => {
    const user = new User({
      email: 'someone@example.com',
      password: 'password',
      firstName: 'some',
      lastName: 'one',
    });
    expect(user.email).toEqual('someone@example.com');
  });

  it('has a password', () => {
    const user = new User({
      email: 'someone@example.com',
      password: 'password',
      firstName: 'some',
      lastName: 'one',
    });
    expect(user.firstName).toEqual('some');
  });

  it('can list all users', (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it('can save a user', (done) => {
    date = new Date('2022-01-01');
    const user = new User({
      firstName: 'some',
      lastName: 'one',
      email: 'someone@example.com',
      password: 'password',
      profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
      interests: ['Sports'],
      birthday: date,
      gender: 'Male',
    });

    user.save((err) => {
      expect(err).toBeNull();
      User.find((err, users) => {
        expect(err).toBeNull();
        expect(users[0]).toMatchObject({
          firstName: 'some',
          lastName: 'one',
          email: 'someone@example.com',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          birthday: date,
          interests: ['Sports'],
          gender: 'Male',
          chats: [],
        });
        done();
      });
    });
  });

  it('Check chats array exists on user model', (done) => {
    user = new User({
      firstName: 'some',
      lastName: 'one',
      email: 'nope@example.com',
      password: 'password',
      profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
      interests: ['Sports'],
      birthday: date,
      gender: 'Male',
      chats: ['6380b408ba3b91e4853f389e'],
    });
    expect(user.chats).toEqual(['6380b408ba3b91e4853f389e']);
    done();
  });

  // // TODO: Finish this test. Testing the friendslist.
  // it('can add friends', (done) => {
  //   const user = new User({
  //     email: 'someone@example.com',
  //     password: 'password',
  //     firstName: 'some',
  //     lastName: 'one',
  //   });

  //   user.save((err) => {
  //     expect(err).toBeNull();

  //     User.find((err, users) => {
  //       expect(err).toBeNull();
  //       expect(users.length).toEqual(1);
  //       expect(users[0]).toMatchObject({
  //         email: 'someone@example.com',
  //         password: 'password',
  //         firstName: 'some',
  //         lastName: 'one',
  //       });
  //       done();
  //     });
  //   });
  //   //   // Create 3 users
  //   //   const user1 = new User({
  //   //     email: 'some1@example.com',
  //   //     password: 'password',
  //   //     firstName: 'Spongebob',
  //   //     lastName: 'Squarepants',
  //   //   });
  //   //   const user2 = new User({
  //   //     email: 'some2@example.com',
  //   //     password: 'password',
  //   //     firstName: 'Sandy',
  //   //     lastName: 'Cheeks',
  //   //   });
  //   //   const user3 = new User({
  //   //     email: 'some3@example.com',
  //   //     password: 'password',
  //   //     firstName: 'Eugene',
  //   //     lastName: 'Krabs',
  //   //   });

  //   //   // Save all 3 users on the database.
  //   //   user1.save();
  //   //   user2.save();
  //   //   user3.save();
  //   //   // let spongebob = User.findOne({ name: 'spongebob' });
  //   //   User.find((err, users) => {
  //   //     // expect(err).toBeNull();

  //   //     expect(users.length).toEqual(3);
  //   //     done();
  //   //   });
  //   //   console.log(users);
  //   //   done();
  // });
});
