import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addMovie } from '../redux/action';
import styles from "../styles/Navbar.module.css"

const Home = () => {
  let dispatch=useDispatch();
  let {Movies,user}=useSelector(state=>state);
  const getMovies=async()=>{
    let res=await fetch('https://imdb-zmzs.onrender.com/movie');
    let res2=await res.json();
     dispatch(addMovie(res2.data))
  }

  useEffect(()=>{
    getMovies();
  },[user])
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