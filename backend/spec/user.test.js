const mongoose = require('mongoose');

require('../spec/mongodb_helper');
// require('simple-mongodb-helper');
const User = require('../models/user');

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
    expect(user.password).toEqual('password');
  });

  it('can list all users', (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it('can save a user', (done) => {
    date = new Date('2022-01-01')
    const user = new User({
      firstName: 'some',
      lastName: 'one',
      email: 'someone@example.com',
      password: 'password',
      profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
      interests: ['Sports'],
      birthday: date,
      gender: 'Male'
      
    });

    user.save((err) => {
      expect(err).toBeNull();

      User.find((err, users) => {
        expect(err).toBeNull();

        expect(users[0]).toMatchObject({
          firstName: 'some',
          lastName: 'one',
          email: 'someone@example.com',
          password: expect.anything(),
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          birthday: date,
          interests: ['Sports'],
          gender: 'Male'
        });
        done();
      });
    });
  });

  it ('can add multiple friends', (done) => {
    const user = new User({
          firstName: 'some',
          lastName: 'one',
          email: 'someone@example.com',
          password: 'password',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          birthday: date,
          interests: ['Sports'],
          gender: 'Male'
    });
    const user1 = new User({
          firstName: 'some',
          lastName: 'one',
          email: 'someone@example.com',
          password: 'password',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          birthday: date,
          interests: ['Sports'],
          gender: 'Male'
    });
    user.save((err) => {
      expect(err).toBeNull();
      user1.save((err) => {
        expect(err).toBeNull();
        User.find((err, users) => {
          expect(err).toBeNull();
          expect(users.length).toEqual(2);
          done();
        })
    });

    })
    
  });

});