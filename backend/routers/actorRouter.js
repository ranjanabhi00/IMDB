const Router=require('express');
const { getActors, addActor } = require('../controller/actorController');


const actorRouter=Router();

actorRouter.get("/",getActors);
actorRouter.post("/",addActor);

module.exports=actorRouter;