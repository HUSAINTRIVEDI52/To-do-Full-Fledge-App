const router=require('express').Router();
const userController = require('../controller/user.controller');

router.post('/registerUser',userController.register);

module.exports=router;