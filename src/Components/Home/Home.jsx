import React from 'react';
import './Home.css';
import { useEffect, useState }from "react";
import Hero from '../Hero/Hero';
import Background from '../Background/Background';

const Home = () => {
  let heroData = [
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
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
  

    


export default Home;