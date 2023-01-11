import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie } from '../redux/action';

const Home = () => {
  let dispatch=useDispatch();
  let {Movies}=useSelector(state=>state);
  const getMovies=async()=>{
    let res=await fetch('http://localhost:8080/movie');
    let res2=await res.json();
     dispatch(addMovie(res2.data))
  }

  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div>
      {
        Movies.map((movie)=>
        <div key={movie._id}>
            <img src={movie.img_url} alt="" />
            <h3>Title:{movie.title}</h3>
            <h3>Producer:{movie.producer.name}</h3>
        </div>)
      }
    </div>
  )
}

export default Home