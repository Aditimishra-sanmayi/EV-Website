import React from 'react';
import './Explore.css';
import { useEffect, useState }from "react";
import Hero from '../Hero/Hero';
import Background from '../Background/Background';

const Explore = () => {
  let heroData = [
    {text1:"Driving innovation toward a sustainable future",text2:"Pioneering the future of transportation"},
    {text1:"Charging toward a cleaner tomorrow",text2:"Empowering a greener tomorrow, one charge at a time"},
    {text1:"Join the electric revolution for a cleaner planet",text2:"Driving change for a sustainable world"},
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
  

    


export default Explore;