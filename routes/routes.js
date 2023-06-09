const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller')

router.post('/create', userController.createUser)
router.get('/exsits', userController.exisitUser)



module.exports = router