const mongoose=require('mongoose');


const actorSchema=new mongoose.Schema({
    name:{type: String,unique:true},
    
},{
    versionKey:false,
    timestamps:true
})

const actorModel=mongoose.model('actors',actorSchema);

module.exports=actorModel