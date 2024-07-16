
const product = require("../models/Product");

exports.addproduct = async (req, res) => {
    
    try {
        const newProduct = new product({name:req.body.name,description:req.body.description,price:req.body.price});
        const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
             newProduct.img=url
        await newProduct.save();
  return res.status(201).send({msg:"product add succes"})
    } catch (error) {
        console.error(error);

    }
};

exports.getproducts=async(req,res)=>{
    try {
      let getproducts= await product.find()
        return res.status(200).send(getproducts)
    } catch (error) {
        console.log(error);
    }
}

exports.updateproduct=async(req,res)=>{
    try {
       
      let updateproducts= await product.findByIdAndUpdate(req.params.id,req.body,{ new: true })
    
      if(req.file){
        productUpdated = await  product.findOne({ _id: req.params.id })
      const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
               productUpdated.img =url
           await productUpdated.save()
    }
      return res.status(200).send(updateproducts)

    } catch (error) {
        console.log(error);
    }
}

exports.deleteproduct=async(req,res)=>{
    try {
        let result=await product.deleteOne({_id:req.params.id})
        return res.status(200).send(result)
    } catch (error) {
        console.log(error);
        
    }
}