const mongoose=require('mongoose');


const movieSchema=new mongoose.Schema({
    title:{type :String},
    img_url:{type: String},
    actors:[{type:mongoose.Schema.Types.ObjectId,ref:"actors"}],
    producer:{type:mongoose.Schema.Types.ObjectId,ref:"producers"},
    releaseYear:{type: String}
},{
    versionKey:false,
    timestamps:true
})

const movieModel=mongoose.model("movies",movieSchema);

module.exports=movieModel