import React from 'react';
import './Contact.css';
import { useEffect, useState }from "react";
import Hero from '../Hero/Hero';
import Background from '../Background/Background';

const Contact = () => {
  let heroData = [
    {text1:"email:evwebsite@gmail.com"},
    {text1:"phone no.:1234567"},
    {text1:"Address:JP Nagar Bangalore"},
  ]
  const [heroCount,setHeroCount]=useState(0);
  const [playStatus,setPlayStatus]=useState(true);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return (
    <div>
    <Background playStatus={playStatus} heroCount={heroCount}/>
    
     <Hero
     setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    /> 
    
    
    </div>
  );
}
  

    


export default Contact;