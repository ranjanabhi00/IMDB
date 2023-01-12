import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addActor, addProducer } from '../redux/action'
import styles from '../styles/Navbar.module.css' 

const Actor = ({type}) => {
     const [actor,setActor]=useState({name:"",gender:"",bio:"",dob:""})
     let dispatch=useDispatch();
     let state=useSelector((state)=>state)
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setActor({...actor,[name]:value})
            
        
     }
     
     const getActors=async()=>{
        let url=`https://imdb-zmzs.onrender.com/${type}`
        let res=await fetch(url);
        let res2=await res.json();
        if(type=='actor')
        dispatch(addActor(res2.data))
        else
        dispatch(addProducer(res2.data))
        console.log(state);

     }
     const checkEmpty=()=>{
        if(actor.name && actor.gender && actor.bio && actor.dob)
          return true;
          else 
          return false;
     }
    const handleClick=async()=>{
        let url=`https://imdb-zmzs.onrender.com/${type}`
        if(checkEmpty())
          {
            let res=await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type":'application/json'
                },
                body:JSON.stringify(actor)

            })
         
          console.log(state.Acors);
          }
          else
          alert("Please fill valid data")
          getActors();
    }
  return (
    <div  className={styles.actor}>

          <h1>Create New {type}</h1>
        <input type='text' placeholder={type=='actor'?'enter name of actor':'enter name of producer'}
         name='name' value={actor.name} onChange={handleChange} />
        <input type='date' placeholder='Enter date of birth' 
         name='dob' value={actor.dob} onChange={handleChange} />
        <input type='text' placeholder='Enter gender'
          name='gender' value={actor.gender} onChange={handleChange} />
        <input type='text' placeholder='enter bio'
         name='bio' value={actor.bio} onChange={handleChange} />
         <button onClick={handleClick}>Add {type}</button>
    </div>
  )
}

export default Actor