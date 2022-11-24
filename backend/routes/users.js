var express = require('express');
var router = express.Router();
var { addUser, loginUser, getMe } = require('../controllers/user');

/* GET users listing. */
router.post('/', addUser);
router.post('/login', loginUser);
router.post('/me', getMe);


module.exports = router;
