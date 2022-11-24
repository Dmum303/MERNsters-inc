const app = require('../../app');
const request = require('supertest');
require('../mongodb_helper');
const User = require('../../models/user');

describe('/users', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('POST, when all fields completed', () => {
    test('the response code is 201', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          firstName: 'some',
          lastName: 'one',
          email: 'someone@example.com',
          password: 'password',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          interests: ['Sports'],
          birthday: new Date('2022-01-01'),
          gender: 'Male',
        });
      expect(response.statusCode).toBe(201);
    });

    test('a user is created', async () => {
      await request(app)
        .post('/users')
        .send({
          email: 'scarlett@email.com',
          password: '1234',
          firstName: 'scarlett',
          lastName: 'witch',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          interests: ['Sports'],
          birthday: new Date('2022-01-01'),
          gender: 'Female',
        });
      let users = await User.find();
      let newUser = users[users.length - 1];
      expect(newUser.email).toEqual('scarlett@email.com');
      expect(newUser.lastName).toEqual('witch');
    });
  });

  describe('POST, when password is missing', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          email: 'scarlett@email.com',
          firstName: 'scarlett',
          lastName: 'witch',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          interests: ['Sports'],
          birthday: new Date('2022-01-01'),
          gender: 'Female',
        });
      expect(response.statusCode).toBe(400);
    });

    test('does not create a user', async () => {
      await request(app).post('/users').send({
        email: 'skye@email.com',
        firstName: 'skye',
        lastName: 'broadbande',
      });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe('POST, when email is missing', () => {
    test('response code is 400', async () => {
      let response = await request(app)
        .post('/users')
        .send({
          password: '1234',
          firstName: 'scarlett',
          lastName: 'witch',
          profilePic: 'https://i.imgur.com/1Q9ZQ9u.png',
          interests: ['Sports'],
          birthday: new Date('2022-01-01'),
          gender: 'Female',
        });
      expect(response.statusCode).toBe(400);
    });

    test('does not create a user', async () => {
      await request(app).post('/users').send({ password: '1234' });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
});
