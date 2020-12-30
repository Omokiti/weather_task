import React,{useState} from "react";

import './App.css';


function App() {

  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});
//`${api.url}weather?q=${query}&appid=${api.Key}&units=metric`
  const search=e=>{
   if(e.key ==='Enter'){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=2c49d1c9f8e8728e6b61524220455f88`)
    .then(res=>res.json())
    .then(result=>{
      setWeather(result);
    setQuery('');
    console.log(result)
    });
   }
  }
  return (
    <div className="App">
      <main>
        <div className="search">
        <h2>Weather App</h2>
     <img src="./weather.svg"alt="weather icon" width="500px" height="200px"/>
     
     <input type="text" placeholder="Search"onChange={e=>setQuery(e.target.value)} value={query} onKeyPress={search}/>

        </div>
      
     {(typeof weather.main !='undefined')?(
       <div>
        <div className="locations">

     <div>{weather.name},{weather.sys.country}</div>
   <div>{Math.round(weather.main.temp)}°C</div>
<    div>{weather.weather[0].main}</div>
    </div>
   </div>

         

     ): ('')}
   </main>
    
    </div>
  );
}

export default App;
