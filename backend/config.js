require('dotenv').config()
const mongoose=require('mongoose');

const uri=process.env.DB_URI || "";
const connectDB=async() =>{
try{
    await mongoose.connect(uri);
    console.log("Database connected");
}
catch(err){
    console.log("connection failed");

}

}
module.exports=connectDB;