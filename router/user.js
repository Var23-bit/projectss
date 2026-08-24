const express = require('express');
const router = express.Router();
const handleusersignup = require('../controller/user');
router.post('/signup', handleusersignup);
router.post('/login', handleuserlogin);
module.exports = router;
