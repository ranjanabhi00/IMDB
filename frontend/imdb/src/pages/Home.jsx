import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addMovie, login } from '../redux/action';
import styles from "../styles/Navbar.module.css"

const Home = () => {
  let dispatch=useDispatch();
  let {Movies,user}=useSelector(state=>state);
  const [loading,setLoading]=useState(false)
  const getMovies=async()=>{
    setLoading(true);
    let res=await fetch('https://imdb-zmzs.onrender.com/movie');
    let res2=await res.json();
     dispatch(addMovie(res2.data))
     setLoading(false)
  }
  const getUser=async()=>{
    let token=localStorage.getItem("LOGIN_TOKEN");
    if(!token){
      return;
    }
  
    let res=await fetch(`https://imdb-zmzs.onrender.com/auth/getUser?token=${token}`)
    let res2=await res.json();
    console.log(res2);
    dispatch(login(res2.data.name))
   
  }

  useEffect(()=>{
    getMovies();
    getUser();
  },[user])
  if(loading){
    return <h1>.....Loading.....</h1>
  }
  return (
    <div className={styles.main}>
      {
        Movies.map((movie)=>
        <div key={movie._id} className={styles.card}>
        <div>
            <img src={movie.img_url} alt="" />
            
            </div>
            <div>
            <h3>Title:{movie.title}</h3>
            <h3>Release:{movie.releaseYear}</h3>
            <h3>Producer:{movie.producer.name}</h3>
            <span className={styles.desc}>Actors:{
              movie.actors.map((act)=><span key={act._id}>{act.name},</span>)
            }</span>
            <br/>
            <Link to={`/edit/${movie._id}`}><button disabled={!user} className={user?styles.active:styles.notActive
            }>Edit Information</button></Link>
            </div>
        </div>)
      }
    </div>
  )
}

export default Home