const user = require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

exports.register=async(req,res)=>{
  const {email,password,role}=req.body
    try {
        if(role){
            return res.status(401).send("non autorisé")
        }
        const emailexist= await user.findOne({email:email})
        if (emailexist) {
            return res.send({msg:"email exist please login"})
        }
        let passwordhashed=await bcrypt.hash(password,10)
          req.body.password=passwordhashed
          const newuser = new user(req.body);
          await newuser.save();

    return res.status(201).send({msg:"register succes"})

    } catch (error) {
        console.log(error);
    }

}

exports.login=async(req,res)=>{
    
    const { email, password } = req.body
    try {
        const existUser = await user.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey,{ expiresIn: '1h' })

          existUser.password=undefined
      return res.send({user:existUser,token})

    } catch (error) {
        console.log(error);
        
    }
}

exports.current= (req, res) => {
    try{
      res.send(req.user);
  } catch (error) {
      console.log(error);
      }
    }
exports.updateuser=async(req,res)=>{
    try {
         const result=await user.findByIdAndUpdate(req.params.id,req.body,{ new: true })
        
       res.status(200).send(result)
    } catch (error) {
        console.log(error);
    }
}

exports.updatepassword=async(req,res)=>{
   try {

    
   } catch (error) {
    console.log(error);
   }
}