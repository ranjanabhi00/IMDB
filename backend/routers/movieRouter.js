const Router=require('express');
const { addMovie, getMovies, updateMovie } = require('../controller/movieController');


const movieRouter=Router();

movieRouter.post("/",addMovie);
movieRouter.get("/",getMovies);
movieRouter.put("/:id",updateMovie)

module.exports=movieRouter