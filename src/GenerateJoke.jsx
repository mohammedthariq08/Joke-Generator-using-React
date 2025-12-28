import React from 'react'
import { useState } from 'react';
import "./App.css"
export const GenerateJoke = () => {
    const [joke, setJoke]=useState('Click button for a joke!');
    const getJoke=async()=>{
        const response=await fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
        const data=await response.json();
        setJoke(data.joke);
    }
  return (
    <div>
        <div className="container">
            <h2>Joke Generator</h2>
            <button onClick={getJoke}>Genetate Joke</button>
        </div>
        <div className="joke-card">
            <h3>{joke}</h3>
        </div>
    </div>)
}
