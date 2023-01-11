const mongoose=require('mongoose');


const actorSchema=new mongoose.Schema({
    name:{type: String,unique:true},
    gender:{type :String},
    dob:{type :Date},
    bio:{type :String}
    
},{
    versionKey:false,
    timestamps:true
})

const actorModel=mongoose.model('actors',actorSchema);

module.exports=actorModel