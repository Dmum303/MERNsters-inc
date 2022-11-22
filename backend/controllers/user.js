const Message = require('../models/message');

const addUser = async (req, res) => { 
  try {
    // const message = new Message(req.body);
    // await message.save();
    res.status(201).send('Make user');
  } catch (error) {
    console.log(error);
}};

module.exports = { addUser };
