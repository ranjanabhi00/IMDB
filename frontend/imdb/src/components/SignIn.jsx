import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword] =useState("");
  let navigate=useNavigate();

  const login=async()=>{
if(email && password){
  let user={
    email,password
  }
  try{
   let res=await fetch('https://imdb-zmzs.onrender.com/auth/login',{
           method:"POST",
           headers:{
            "Content-Type":'application/json'
           },
           body:JSON.stringify(user)
   })
   let res2=await res.json();
   if(res2.token){
    localStorage.setItem("LOGIN_TOKEN",res2.token);
    navigate("/")
   }
   else{
    alert("Wrong credential");
    return;
   }
}


catch(err){
  console.log(err);
}
  
}
else{
  alert("Enter Every Field");
  return;
}
  
  }
  return (
    <div style={{
        margin:'auto',
        width:'200px'
    }}>
  <h1> Sign In</h1>
      <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} />
      <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
       <button onClick={login}>Sign In</button>
       <h2>Don't have an account?<Link to='/register'><b style={{
        cursor:'pointer',
        textDecoration:'none'
       }}>Register</b></Link></h2>
    </div>
  )
}

export default SignIn