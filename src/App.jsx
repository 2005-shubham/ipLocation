import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ip,setip] = useState({});
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await fetch("https://api-v1.com/v1/sV3.php?key=PI6");
      const jsonData = await data.json();
      console.log(jsonData);
      setip(jsonData);
    }
    fetchData();
    },[] )
  return (
    <>
      {/* <h1>{ip['post code']}</h1>
      <h1>{ip.country}</h1>
      <h1>{ip['country abbreviation']}</h1>
      <h1>{ip.places.map((item, index)=>(
        <div>
          <p>{item.latitude}</p>
          <p>{item.longitude}</p>
        </div>
      ))}
      </h1> */}
      <h1>{ip.A}</h1>
      <h1>{ip.B}</h1>
      <h1>{ip.C}</h1>
      <h1>{ip.F}</h1>
      <h1>{ip.L}</h1>
      <h1>{ip.M}</h1>
      <h1>{ip.R}</h1>
      <h1>{ip.S}</h1>
      <h1>{ip.a}</h1>
      <h1>{ip.b}</h1>
      <h1>{ip.c}</h1>
      <h1>{ip.cb}</h1>

    </>
  )
}

export default App
