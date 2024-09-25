import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

const api_key = import.meta.env.VITE_SOME_KEY





const Weather=({capital})=>{

    const [weather, setWeather]=useState(null)

    console.log(api_key)
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`).then(response => {
            setWeather(response.data)     
        })
      
      }
      ,[])

    if(!weather){return null}
    else{
        const icon=weather.weather[0].icon
        return(
            <div>
                <h1>Weather in {capital}</h1>
                { <p>temperature:{(weather.main.temp - 273.15).toFixed(2)} °C </p> }
                {<img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>  }
                <p>wind: {weather.wind.speed} m/s </p>
            </div>
        )
    }
    
}

export default Weather