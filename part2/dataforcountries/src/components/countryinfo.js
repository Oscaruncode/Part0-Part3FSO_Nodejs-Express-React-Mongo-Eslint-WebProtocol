import { useEffect,useState } from "react";

//component use to display Capital Weather
const Weather = ({temperature,wind,icon}) => <div> <p>Temperature {temperature} ° Celcius</p> <img style={{margin:"5px"}} width="50px" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={"Icon"}/> <p> wind {wind} m/s</p> </div> 


//component display country info
const CountryInfo = ({country}) =>{  
     //States
    const [lat,setLat] = useState(null)  //lat = [longitude,latitude]
    const [weather,setWeather] = useState(null) //weather= {wheaterData}

   //const
    const countryname = country.name.common;
    const countryLang= (country) =>  Object.values(country.languages).map(lang=><li key={lang}>{lang}</li>) ;
    const key= process.env.REACT_APP_API_KEY
    const countryCap = country.capital;

    //FetchData 1°fetch latitude and longitude for a countryname - 2°fetch weather for a latitude and longitude
    useEffect(()=> {fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${countryCap}&limit=1&appid=${key}`).then(response => response.json()).then( data => {setLat([data[0].lat,data[0].lon])})   },[countryCap] )
    useEffect( () => {if(lat){fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat[0]}&lon=${lat[1]}&appid=${key}`).then(response => response.json()).then(data => setWeather(data))    }  },[lat])

  return(
      <div> 
          <h1> {countryname}</h1> 
            <p>Capital {countryCap}</p> 
            <p>Area {country.area}</p>
          <h1>lenguages:</h1>
            <ul>{countryLang(country)}</ul>
          <img style={{ margin: "5px" }} alt={`${countryname} Flag`} width="100px" src={country.flags.png}/>
          <h1>Weather in {countryCap}</h1>
          {lat&&weather?  <Weather temperature={(weather.main.temp-273.15).toFixed(2)} wind={weather.wind.speed} icon={weather["weather"][0]["icon"]} /> :<h3>...</h3>}
      </div>)}


export default CountryInfo