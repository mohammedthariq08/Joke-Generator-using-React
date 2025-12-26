import React from 'react'
import { useState } from 'react';
import "./App.css"
export const GenerateJoke = () => {
    const [joke, setJoke]=useState('');
    const getJoke=async()=>{
        const response=await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
        const data=await response.json();
        setJoke(data.joke);
    }
  return (
    <div>
        <h2>Joke Generator</h2>
        <button onClick={getJoke}>Genetate Joke</button>
        <h3 className="joke-card">{joke}</h3>
    </div>)
}
