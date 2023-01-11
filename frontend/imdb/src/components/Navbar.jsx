import React from 'react'
import { Link } from 'react-router-dom'
import image from "../images/imdb-logo.png"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
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
        <Link to="/signin"><button>Sign In </button> </Link>
        <span className={styles.user}>user</span>
        
    </div>
  )
}

export default Navbar