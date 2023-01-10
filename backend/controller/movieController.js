const { isObjectIdOrHexString } = require("mongoose");
const movieModel = require("../model/movieModel");
const {ObjectId, ObjectID}=require('mongodb');
const producerModel = require("../model/producerModel");
const actorModel = require("../model/actorModel");

const addMovie=async(req,res)=>{
   let movie=req.body;
  
   let Movie=await movieModel.create(movie);

   res.status(200).send("Movie added successfully")


}

const getMovies=async(req,res)=>{

    let movies=await movieModel.find().populate('producer').populate('actors')

    res.status(200).send({
        "data":movies 
    })
}
const updateMovie=async(req,res)=>{
       let {id}=req.params;
       let movie=req.body;
       
       let Movie=await movieModel.findOneAndUpdate({_id:id},movie,{new:true})
       res.send({
        "data":Movie
       })

}
 
module.exports={addMovie,getMovies,updateMovie}