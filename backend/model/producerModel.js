const mongoose=require('mongoose');


const producerSchema=new mongoose.Schema({
    name:{type: String,unique:true},
    gender:{type :String},
    dob:{type :Date},
    bio:{type :String}
    
},{
    versionKey:false,
    timestamps:true
})

const producerModel=mongoose.model('producers',producerSchema);

module.exports=producerModel