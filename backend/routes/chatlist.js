var express = require('express');
var router = express.Router();
var { addChat, getChats } = require('../controllers/userchatlist');

router.post('/add', addChat);
router.post('/get', getChats);

module.exports = router;
