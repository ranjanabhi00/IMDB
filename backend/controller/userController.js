const userModel = require("../model/userModel");
const bcrypt=require("bcryptjs")

const register=async(req,res)=>{
  let user=req.body;
   let exist=await userModel.findOne({email:user.email})

   if(exist){
    res.status(400).send({
        "message":"User already exist"
    })
    return;
   }
   else{
       let {password}=req.body
       let hashedPassword=bcrypt.hashSync(password,10);
       let user=req.body;
       let User=await userModel.create({...user,password:hashedPassword})
         res.status(200).send("User registered")
   }

 

}

const login=async(req,res)=>{
    
}