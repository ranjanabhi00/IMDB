import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const SignUp = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signUp=async()=>{
    if(name && email && password){
      let user={
        name,email,password
      }
      try{
           let res=await fetch('https://imdb-zmzs.onrender.com/auth/register',{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
           })
           let res2=await res.json();
           console.log(res2);
          }
          catch(err){
            console.log(err);
          }
    }
    else{
      alert("Fill Every Field")
    }
    setName("");
    setEmail("");
    setPassword("");
  }
    
  return (
    <div style={{
      margin:'auto',
      width:'200px'
  }}>
         <h1> Sign Up</h1>
         <input type='text' placeholder='username' onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={signUp}>Sign Up</button>
       <h2>Already have an account?<Link to='/signin'><b >Login</b></Link></h2>
    </div>
  )
}

export default SignUp