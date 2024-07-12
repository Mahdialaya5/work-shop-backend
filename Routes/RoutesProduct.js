const express=require('express')

const router=express.Router()
const productcontroller=require('../controllers/ProductController')

router.post('/',productcontroller.addproduct)
router.get('/',productcontroller.getproducts)
router.patch('/:id',productcontroller.updateproduct)
router.delete('/:id',productcontroller.deleteproduct)

module.exports=router