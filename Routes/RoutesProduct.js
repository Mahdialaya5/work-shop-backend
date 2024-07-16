const express=require('express')

const router=express.Router()
const productcontroller=require('../controllers/ProductController')
const upload=require('../utils/multer')

router.post('/', upload("products").single("file"),productcontroller.addproduct)
router.get('/',productcontroller.getproducts)
router.patch('/:id',upload("products").single("file"),productcontroller.updateproduct)
router.delete('/:id',productcontroller.deleteproduct)

module.exports=router