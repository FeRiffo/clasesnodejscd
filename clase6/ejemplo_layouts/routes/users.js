var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
/* GET users listing. */
router.get('/login', userController.login);
router.post('/login', userController.loginPost);
router.get('/register', userController.register);
router.post('/register', userController.registerPost);
router.get('/logout',userController.logout)

module.exports = router;
