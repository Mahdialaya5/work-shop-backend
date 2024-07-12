const user=require("../models/User")
const bcrypt=require("bcrypt")

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
