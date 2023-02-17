import React, { useEffect, useState } from 'react'

const WeatherCard = ({weatherData}) => {
    const {temp, country, humidity, pressure, speed, name, weathermood, sunset } = weatherData
    let sec = sunset
    let date = new Date(sec * 1000)
    let timeStr = `${date.getHours()} : ${date.getMinutes()}`

    const [weatherIcon, setWeatherIcon] = useState("")

    let time = new Date().toLocaleTimeString()
    const [timeNow, setTimeNow] = useState(time)

    const getUpdatedTime = () => {
        let time = new Date().toLocaleTimeString()
        setTimeNow(time)
    }

    setInterval(getUpdatedTime, 1000)
  
 
    useEffect(()=>{
        if(weathermood){
            switch (weathermood) {
                case "CloudS":
                    setWeatherIcon("wi-day-cloudy")
                    break;
                case "Haze":
                    setWeatherIcon("wi-fog")
                    break;
                case "Clear":
                    setWeatherIcon("wi-day-sunny")
                    break;
            
                default:
                    setWeatherIcon("wi-day-sunny")
                    break;
            }
        }
    },[weathermood])

   return (
    <>
        <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherIcon}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place"> {name}, {country}</div>
          </div>
        </div>
        <div className="date">{timeNow}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} km/hr <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard