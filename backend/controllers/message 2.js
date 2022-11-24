const Message = require('../models/message');

const addMessage = async (req, res) => { 
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).send('req.body');
  } catch (error) {
    console.log(error);
}};

module.exports = { addMessage };

