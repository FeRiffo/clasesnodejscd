const express = require('express')
const router = express.Router();
const serviciosController = require('../controllers/serviciosController') 

router.get('/',serviciosController.all);
router.post('/create',serviciosController.create);
router.put('/update/:id',serviciosController.update);
router.delete('/delete/:id',serviciosController.delete);

module.exports = router