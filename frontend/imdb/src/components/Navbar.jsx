import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import image from "../images/imdb-logo.png"
import { login, logout } from '../redux/action'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  const [loading,setLoading]=useState(false)
  const {user}=useSelector(state=>state);
  const dispatch=useDispatch();

  const signOut=()=>{
      localStorage.removeItem("LOGIN_TOKEN");
      dispatch(logout());
  }
  

  return (
    <div className={styles.header}>
        <Link to="/">
           <span > <img src={image} style={{
                height:"50px",
                width:"50px"
            }}  alt='logo' />
            </span>
        </Link>
        <input type='text' placeholder='search movie' />
        <Link to='/create'><button>Create Movie</button> </Link>
        { !user && <Link to="/signin"><button>Sign In </button> </Link>}
        { user && <button onClick={signOut}>Sign Out</button>}
        <span className={user?styles.showUser:styles.notShow}>{user}</span>
        
    </div>
  )
}

export default Navbar