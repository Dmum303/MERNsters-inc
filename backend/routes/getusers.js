var tokenChecker = require('../tokenChecker');
var express = require('express');
var router = express.Router();
var { getUsers } = require('../controllers/getusers');

router.get('/', getUsers);

module.exports = router;
