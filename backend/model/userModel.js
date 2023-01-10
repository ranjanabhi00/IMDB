const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    name:{type: String},
    email:{type: String},
    password:{type: String}
},{
    versionKey:false,
    timestamps:true
})

const userModel=mongoose.model('users',userSchema);

module.exports=userModel