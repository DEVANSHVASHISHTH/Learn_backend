import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes,setjokes]=useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })
  return (
    <>
      <h1>chai aur full stack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((jokes,index)=>(
          <div key={jokes.index}>
            <h3>{jokes.title}</h3>
            <p>{jokes.cntent}</p>
          </div>
        ))
      }
    </>
   
  )
}

export default App
