const producerModel = require("../model/producerModel");

 


 const addProducer=async(req,res)=>{
    let producer=req.body;
    try{
    let addedProducer=await producerModel.create(producer);
    res.status(200).send({
            "data":producer
    })
}
catch(err){
    console.log(err);
    res.send("Producer already exists")
}
    
    }
    
    const getProducers=async(req,res)=>{
        
        let producers=await producerModel.find();
        res.send({
            "data":producers
        })
    }


    module.exports={addProducer,getProducers}