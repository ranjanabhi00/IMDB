const Router=require('express');
const { getProducers, addProducer } = require('../controller/producerController');


const producerRouter=Router();


producerRouter.get("/",getProducers);
producerRouter.post("/",addProducer);


module.exports=producerRouter;
