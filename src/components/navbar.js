import React from 'react'

export default function Navbar(props) {

    const {handleCity,getWeather}=props;

    return (
        <div>
            <div className="row container-fluid pt-4 mx-4">
                <h3 className="text-black  col-6 pl-4"><u>Weather App</u></h3>
                <form className=" row col-6 justify-content-end text-white">
                   <div className="col-4 md-2">
                     <input type="text" required className="form-control bg-black border-top-0 border-left-0 border-right-0 rounded-0 border-secondary text-black "placeholder="Enter City" onChange={(e)=>handleCity(e.target.value)}/>
                   </div>
                   <button className="btn btn-success md-2" onClick={(e)=>getWeather(e)}>Get Weather</button>
                </form>     
            </div>
        </div>
    )
}
