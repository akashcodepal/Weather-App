import React from 'react'
import  'bootstrap/dist/css/bootstrap.css'

export default function Displayweather(props) {

    const {city,country,description,icon,temp,feelLike,minTemp,maxTemp,pressure,humidity,windSpeed} =props

    var getIcon= "http://openweathermap.org/img/wn/" + icon + ".png" ; 

    return (
        <div className="container my-5 card">
            <div className="row mt-4 ">
                <div className="col-3 text-center "> 
                   <h2 >{Math.floor(temp-273)}<sup>0</sup>C ,{description}</h2>
                   <h5>Feels like {Math.floor(feelLike-273)}<sup>0</sup>C</h5>
                   <h6>{city},{country}</h6>
                </div>
                <div className="col-9 px-1 py-2">
                   <img src={getIcon} alt="Weather" className="icon"/>
                </div>
            </div>    
            <div className="row  my-5 text-center ">
                <div className="col-3">
                    <div>Wind Speed <b>(m/sec)</b></div>
                    <div>{windSpeed}</div>
                </div>
                <div className="col-3">
                    <div>Pressure <b>(hPa)</b></div>
                    <div>{pressure}</div>
                </div>
                <div className="col-3">
                    <div>High/Low <b><sup>0</sup>C</b></div>
                    <div>{Math.floor(minTemp-273)}/{Math.floor(maxTemp-273)}</div>
                </div>
                <div className="col-3">
                    <div>Humidity <b>(%)</b></div>
                    <div>{humidity}</div>
                </div>
           </div>

        </div>
           
        )
    }
    
