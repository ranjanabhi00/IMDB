require("dotenv").config()
const express=require('express');
const cors=require('cors');
const connectDB = require("./config");
const movieModel = require("./model/movieModel");
const actorRouter = require("./routers/actorRouter");
const producerRouter = require("./routers/producerRouter");
const movieRouter = require("./routers/movieRouter");

const app=express();
app.use(cors());
app.use(express.json());



const port=process.env.PORT || 5000;

app.use("/actor",actorRouter);
app.use("/producer",producerRouter);
app.use("/movie",movieRouter)

app.listen(port,()=>{
     connectDB()
    console.log('server is running at port '+port);
})