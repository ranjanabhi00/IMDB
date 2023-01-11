import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const SignIn = () => {
   
  return (
    <div style={{
        margin:'auto',
        width:'200px'
    }}>
  <h1> Sign In</h1>
      <input type="text" placeholder='email' />
      <input type='text' placeholder='password' />
       <button>Sign In</button>
       <h2>Don't have an account?<Link to='/register'><b style={{
        cursor:'pointer',
        textDecoration:'none'
       }}>Register</b></Link></h2>
    </div>
  )
}

export default SignIn