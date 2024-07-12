const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
name:{type:String},
description:{type:String},
price:{type:Number},
img:{type:String},
date:{type:Date,default:Date.now}
})

const product=mongoose.model("product",productSchema)

module.exports=product
