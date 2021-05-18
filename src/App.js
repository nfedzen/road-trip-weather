import React, {useState, useEffect} from 'react'
import WeatherInfo from './components/WeatherInfo'
import CityForm from './components/CityForm'

const apiKey = 'ef6b7de36c8aed58b9210b1226e7bc4d'

export default function App() {
  
  const [weather, setWeather] = useState('')
  const [city, setCity] = useState('London')

  function getWeather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(data => data.json())
      .then(data => setWeather(data))
      
    console.log(weather)
  }

  return(
    <div>
      <h1>Road Trip Weather App</h1>
      <CityForm city={city} setCity={setCity} getWeather={getWeather}/>
      <WeatherInfo weather={weather}/>
    </div>
  )
}
