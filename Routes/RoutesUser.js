const express=require('express')

const router=express.Router()
const usercontroller=require("../controllers/UserController")
const { registerCheck,validator,loginCheck } = require('../middlewares/Validator')
const isAuth = require('../middlewares/IsAuth')


router.post('/register',registerCheck(),validator,usercontroller.register)
router.post('/login',loginCheck(),validator,usercontroller.login)
router.get('/',isAuth(),usercontroller.current)
router.patch('/:id',isAuth(),usercontroller.updateuser)
router.patch('/:id/newpassword',isAuth(),usercontroller.updatepassword)
//router.delete('/:id',)

module.exports=router