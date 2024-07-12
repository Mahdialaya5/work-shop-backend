const express=require('express')

const router=express.Router()
const usercontroller=require("../controllers/UserController")
const { registerCheck,validator } = require('../middlewares/Validator')


router.post('/register',registerCheck(),validator,usercontroller.register)
//router.post('/login',)

//router.get('/',)
//router.patch('/:id',)
//router.delete('/:id',)

module.exports=router