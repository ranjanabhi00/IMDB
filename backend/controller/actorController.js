const actorModel = require("../model/actorModel");


const addActor=async(req,res)=>{
let actor=req.body;

try{
let addedActor=await actorModel.create(actor);
res.status(200).send({
        "data":addedActor
})
}
catch(err){
    console.log(err);
    res.status(400).send("actor already exists")
    return;
}

}

const getActors=async(req,res)=>{
    
    let actors=await actorModel.find();
    res.send({
        "data":actors
    })
}


module.exports={addActor,getActors}