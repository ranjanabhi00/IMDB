import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Actor from '../components/Actor'
import { addActor, addProducer } from '../redux/action'
import styles from "../styles/Navbar.module.css"

const Create = () => {
    const [actors,setActors]=useState([]);
    const [producer,setProducer]=useState("");
    const [title,setTitle]=useState("");
    const [poster,setPoster]=useState("");
    const [year,setYear]=useState("");
    const [showActor,setShowActor]=useState(false);
    const [showProducer,setShowProducer]=useState(false);
    const navigate=useNavigate();

    let dispatch=useDispatch();
    let {Actors,Producers,user} =useSelector(state=>state)

    useEffect(()=>{
        if(!user)
        navigate("/signin")
           
    },[user])
    const getActors=async(type)=>{
        let url=`https://imdb-zmzs.onrender.com/${type}`
        let res=await fetch(url);
        let res2=await res.json();
        if(type=='actor')
        dispatch(addActor(res2.data))
        else if(type=='producer')
        dispatch(addProducer(res2.data))
        console.log(Actors);

     }
     useEffect(()=>{

        getActors('actor');
        getActors('producer')
     },[])
     const createMovie=async()=>{
        let Movie={
            title,
            img_url:poster,
            releaseYear:year,
            producer,
            actors
        }
        //console.log(producer ,actors);
        console.log(Movie);
        let res=await fetch('https://imdb-zmzs.onrender.com/movie',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Movie)
        })
     }
     

  return (
    <div>

       <div className={styles.actor}>
        <input type='text' placeholder='enter title of movie' onChange={(e)=>setTitle(e.target.value)} />
        
        <input type="text" placeholder='enter poster url' onChange={(e)=>setPoster(e.target.value)}/>
        
        <input type='text' placeholder='enter year of release' onChange={(e)=>setYear(e.target.value)} />
        </div>
        
        <Actor type={'actor'}/>
        
        <Actor type={'producer'} />
        <div style={{
            display:'flex',
            width:'400px',
             margin:'auto',
             justifyContent:'space-between'
             
            
        
        }}>
        <div>
        <h3 onClick={()=>setShowActor(!showActor)} style={{cursor:'pointer'}}>select actors</h3>
        <div className={showActor?styles.show:styles.notShow}>
        {
            Actors.map((actor)=><div key={actor._id}
               style={{
                  border:'1px solid black',
                  width:'100px',
                  cursor:'pointer'
               }}
               onClick={()=>{setActors([...actors,actor._id])
               console.log(actor._id)}}>
            {
                actor.name
            }
            </div>)
        }
        </div>
       </div>
        
        
       <div>
       <h3 onClick={()=>setShowProducer(!showProducer)} style={{cursor:'pointer'}}>select producer</h3>
       <div className={showProducer?styles.show:styles.notShow}>
        {
            Producers.map((actor)=><div key={actor._id}
            style={
                {
                    border:'1px solid black',
                    width:'100px',
                    cursor:'pointer'
                }
            }
            onClick={()=>setProducer(actor._id)}
            >
            {
                actor.name
            }
            </div>)
        }
        </div>
       </div>
       </div>
        <br/>
        <br/>
        <button onClick={createMovie}>Create Movie</button>
    </div>
  )
}

export default Create