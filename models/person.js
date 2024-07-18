const mongoose=require("mongoose")

const personSchema=mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number},
  favoriteFoods:[String]
})

const person=mongoose.model("person",personSchema)


module.exports=person