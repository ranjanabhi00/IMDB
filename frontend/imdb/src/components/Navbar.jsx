import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import image from "../images/imdb-logo.png"
import { login, logout } from '../redux/action'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  const {user}=useSelector(state=>state);
  const dispatch=useDispatch();

  const signOut=()=>{
      localStorage.removeItem("LOGIN_TOKEN");
      dispatch(logout());
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
       getUser();
  },[user])

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