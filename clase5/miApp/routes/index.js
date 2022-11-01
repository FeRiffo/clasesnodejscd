var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
/* CRUD */
router.get('/', indexController.index);//read
router.post('/add',indexController.add);//create
router.put('/update/:id',indexController.update)//update
router.delete('/delete/:id', indexController.delete);//delete
module.exports = router;
