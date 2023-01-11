const producerModel = require("../model/producerModel");

 


 const addProducer=async(req,res)=>{
    let producer=req.body;
    try{
    let addedProducer=await producerModel.create(producer);
    res.status(200).send({
            "data":addedProducer
    })
}
catch(err){
    console.log(err);
    res.status(400).send("Producer already exists")
}
    
    }
    
    const getProducers=async(req,res)=>{
        
        let producers=await producerModel.find();
        res.send({
            "data":producers
        })
    }


    module.exports={addProducer,getProducers}