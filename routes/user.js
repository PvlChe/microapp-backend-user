const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/login', userController.login);
router.post('/signup', userController.signUp);

module.exports = router;
