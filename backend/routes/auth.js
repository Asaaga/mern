const express = require('express');

const router = express.Router();

const authControllers = require('../controllers/auth');

// Post Register Users
router.post("/register", authControllers.postRegister);
//post login user
router.post('/login', authControllers.postLogin);

module.exports = router;