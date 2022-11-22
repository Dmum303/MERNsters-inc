var express = require('express');
var router = express.Router();
var { addMessage } = require('../controllers/message');

/* GET users listing. */
router.post('/', addMessage);

module.exports = router;
