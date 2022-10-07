const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//update user
router.post('/:userId', userController.postUpdateUser);

//delete user
router.put('/:id', userController.postDeleteUser);


module.exports = router;