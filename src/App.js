import React, { useState , useEffect} from 'react';
import Displayweather from './components/displayweather'
import Navbar from './components/navbar'
import  './app.css';
import Axios from 'axios';

function App() {

  const [longitude,setLongitude]=useState('');
  const [latitude,setLatitude] =useState('');

  const [city,setCity]=useState('');
  const [country ,setCountry]=useState('');

  const [weatherData,setWeatherData]=useState(null);

  const [description,setDescription]=useState('');
  const [temp,setTemp]=useState('');
  const [feelLike,setFeelLike]=useState('');
  const [minTemp,setMinTemp]=useState('');
  const [maxTemp,setMaxTemp]=useState('');
  const [pressure,setPressure]=useState('');
  const [humidity,setHumidity]=useState('');
  const [windSpeed,setWindSpeed]=useState('');
  const [icon,setIcon]=useState('');

  useEffect(() => {
        //to get device location
       if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition((position)=>{
           setLatitude(position.coords.latitude);
           setLongitude(position.coords.longitude);
           
           Axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=51439367c5b9c7c0362dac66df3dab7d`)
              .then((res)=>{
                setWeatherData(res.data);
                
                setCity(res.data.name);
                setDescription(res.data.weather[0].main);
                setIcon(res.data.weather[0].icon);
                setTemp(res.data.main.temp);
                setFeelLike(res.data.main.feels_like);
                setMinTemp(res.data.main.temp_min);
                setMaxTemp(res.data.main.temp_max);
                setPressure(res.data.main.pressure);
                setHumidity(res.data.main.humidity);
                setWindSpeed(res.data.wind.speed);
                setCountry(res.data.sys.country);
              })
            })
       }else{
         console.log("geolocation not supported")
       }
  }, [latitude,longitude]);
  

  const handleCity=(u)=>{
    setCity(u);
  }

  const getWeather=(e)=>{
    
    e.preventDefault();
    if(city===''){
      alert("Enter City")
    }else{
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51439367c5b9c7c0362dac66df3dab7d`)
    .then(res => {

      setWeatherData(res.data);

      setCity(res.data.name);
      setDescription(res.data.weather[0].main);
      setIcon(res.data.weather[0].icon);
      setTemp(res.data.main.temp);
      setFeelLike(res.data.main.feels_like);
      setMinTemp(res.data.main.temp_min);
      setMaxTemp(res.data.main.temp_max);
      setPressure(res.data.main.pressure);
      setHumidity(res.data.main.humidity);
      setWindSpeed(res.data.wind.speed);
      setCountry(res.data.sys.country);
    })
    }
    
  }

    return (
    <div> 
      <Navbar handleCity={handleCity} getWeather={getWeather} />

      {(weatherData) ? 
         (<Displayweather city={city} country={country} description={description}
            icon={icon} temp={temp} feelLike={feelLike} minTemp={minTemp}
            maxTemp={maxTemp} pressure={pressure} humidity={humidity}
            windSpeed={windSpeed}   
             />): (<div></div>)}

    </div>
  );
}



export default App;

 
  
