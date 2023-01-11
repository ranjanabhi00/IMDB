import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const SignUp = () => {
    
  return (
    <div style={{
      margin:'auto',
      width:'200px'
  }}>
         <h1> Sign Up</h1>
         <input type='text' placeholder='username' />
      <input type="text" placeholder='email' />
      <input type='text' placeholder='password' />
       <button>Sign Up</button>
       <h2>Already have an account?<Link to='/signin'><b >Login</b></Link></h2>
    </div>
  )
}

export default SignUp