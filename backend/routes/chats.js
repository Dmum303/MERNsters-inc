var express = require('express');
var router = express.Router();
var { getChat, createChat, addMessage } = require('../controllers/chat');

router.post('/findchat', getChat);
router.post('/createchat', createChat);
router.post('/addmessage', addMessage);

module.exports = router;
