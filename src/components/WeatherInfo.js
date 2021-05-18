import React from 'react'

export default function WeatherInfo ({weather}){

  if(weather){
    return(
      <div>
        <h1>City: {weather.name}</h1>
        <h2>Current Temperature: {weather.main.temp} </h2>
        <h2>Conditions: {weather.weather[0].description} </h2>
      </div>
    )
  }else{
    return(
      <div>Weather:</div>
    )
  }
}