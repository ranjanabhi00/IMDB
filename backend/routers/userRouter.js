const {Router}=require('express');
const { register, login, getUser } = require('../controller/userController');


const userRouter=Router();

userRouter.post("/register",register);
userRouter.post("/login",login);
userRouter.get("/getUser",getUser)


module.exports=userRouter