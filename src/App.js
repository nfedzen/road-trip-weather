import React, {useState, useEffect} from 'react'


export default function App() {
  const apiKey = 'ef6b7de36c8aed58b9210b1226e7bc4d'
  const [weather, setWeather] = useState('')
  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=ef6b7de36c8aed58b9210b1226e7bc4d")
      .then(data => data.json())
      .then(data => setWeather(data))
  },[])

  console.log()
  return(
    <div>
      <h1>Hello</h1>
      <h2>{weather.weather[0].description}</h2>
    </div>
  )
}
