// https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=4a5fa7c12484853058fd4f00b9f9991e

import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {

    const [inputData, setInputData] = useState("Karachi")
    const [weatherData, setWeatherData] = useState("")


    const changeHandler = (e) => {
        return(
            setInputData(e.target.value)
        )
    }

    const getWeatherInfo = async () => {
        try {
            let city = inputData
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a5fa7c12484853058fd4f00b9f9991e`
            const res = await fetch(url)
            const data = await res.json()
            // console.log(data);
            const {temp, humidity, pressure} = data.main
            const  {main:weathermood} = data.weather[0]
            const {name} = data
            const {speed} = data.wind
            const {country, sunset} = data.sys
        

            const newWeather = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            }

            setWeatherData(newWeather)
            setInputData("")


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getWeatherInfo()
    }, [])


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            autoFocus
            placeholder="search..."
            id="search"
            className="searchTerm"
            value={inputData}
            onChange={changeHandler}
          />
          <button className="searchButton" onClick={()=>getWeatherInfo()} >Search</button>
        </div>
      </div>

      <WeatherCard weatherData={weatherData} />
    </>
  );
};

export default Temp;
