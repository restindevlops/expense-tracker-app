const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

// Add user => POST
router.post('/add-user', userController.postAddUser);

module.exports = router;
