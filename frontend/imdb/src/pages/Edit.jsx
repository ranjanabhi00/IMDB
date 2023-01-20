import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Actor from '../components/Actor'
import { addActor, addProducer } from '../redux/action'
import styles from "../styles/Navbar.module.css"

const Edit = () => {
    const [actors,setActors]=useState([]);
    const [producer,setProducer]=useState("");
    
    const [showActor,setShowActor]=useState(false);
    const [showProducer,setShowProducer]=useState(false);
    let navigate=useNavigate();

    let dispatch=useDispatch();
    let {Actors,Producers,user} =useSelector(state=>state)
   let {id}=useParams();
    
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
     const updateMovie=async()=>{
        let Movie={
           producer,
            actors
        }
        //console.log(producer ,actors);
        console.log(Movie);
        try{
        let res=await fetch(`https://imdb-zmzs.onrender.com/movie/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Movie)
        })
        let res2 =await res.json();
        console.log(res2)
      }
      catch(err){
        console.log(err);
      }
     }
     if(user==""){
          return navigate("/")
     }

  return (
    <div>

      
        
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
        <button onClick={updateMovie}>Update Movie</button>
    </div>
  )
}

export default Edit 