import React from 'react';
import './About.css';
import { useEffect, useState }from "react";
import Hero from '../Hero/Hero';
import Background from '../Background/Background';

const About = () => {
  let heroData = [
    {text1:"zero emissions, lower maintenance costs"},
    {text1:"educate, inspire, and empower individuals "},
    {text1:"connect with like-minded individuals"},
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
  

    


export default About;