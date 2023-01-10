const mongoose=require('mongoose');


const producerSchema=new mongoose.Schema({
    name:{type: String,unique:true},
    
},{
    versionKey:false,
    timestamps:true
})

const producerModel=mongoose.model('producers',producerSchema);

module.exports=producerModel