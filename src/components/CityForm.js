import React,{useState} from 'react'

export default function CityForm ({city, setCity, getWeather}) {

  function handleChange(e){
    setCity(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getWeather(city)
    console.log("handle submit hit")
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <select value={city} onChange={handleChange}>
          <option value="London">London</option>
          <option value="Denver">Denver</option>
          <option value="Pittsburgh">Pittsburgh</option>
        </select>
        <input type="submit" value="Weather"/>
      </form>
    </div>
  )
}