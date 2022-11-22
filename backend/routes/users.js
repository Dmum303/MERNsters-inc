var express = require('express');
var router = express.Router();
var { addUser } = require('../controllers/user');

/* GET users listing. */
router.get('/', addUser);

module.exports = router;
