const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userModel = require('../model/userModel');


const register=async(req,res)=>{
let user=req.body
try{
let found=await userModel.findOne({email:user.email});
if(found){
    res.status(401).send({"error":"user already exists"});
    return;
}
 let hashedPass=bcrypt.hashSync(user.password,10);
  let curruser={...user,password:hashedPass};
  await userModel.create(curruser);
  res.status(200).send({
    "message":"user registered",
  })
}
catch(err){
    console.log(err);
    res.status(500).send({"error":'Internal error'})
    return;
}

}

const login=async(req,res)=>{
    let user=req.body;
    try{
        let found=await userModel.findOne({email:user.email})
        if(!found){
            res.status(401).send({"error":"User not found"})
            return;
        }
        else{
            let match=bcrypt.compareSync(user.password,found.password)
            if(!match){
                res.status(402).send({"error":"Invalid password"});
                return;
            }
            else{
                let token= jwt.sign({name:found.name},"SECRET")
                res.status(200).send({
                    "token":token
                })
            }
        }

    }
    catch(err){
        console.log(err);
        res.status(500).send({"error":"Internal error"});
        return;
    }
}
const getUser=async(req,res)=>{
    let {token}=req.query;
    try{

        let user= jwt.verify(token,"SECRET")
        if(user){
            res.status(200).send({
                "data":user
            })
        }
        else{
            res.status(400).send({"error":"Invalid token"});
            return;
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({"error":"Internal Error"})
        return;
    }
}


module.exports={register,login,getUser}