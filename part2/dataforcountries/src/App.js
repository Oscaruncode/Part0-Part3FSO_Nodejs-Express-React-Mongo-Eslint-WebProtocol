import {useState, useEffect} from "react";
import Searchb from "./components/searchb";
import CountryDisplay from "./components/countrydisplay"

function App() {
  const [input,setInput] = useState("")
  const [countries,setcountries] = useState([])
  const [countryShow,setcountryShow] = useState([false,""])

  const handleInput = (e) =>{setcountryShow([false,""]) ;setInput(()=>e.target.value)}
  const regex = new RegExp(`^${input.toLowerCase()}`)
  const handleCountryShow = (e) => setcountryShow(()=>[true,e.target.value])
  


  //fecth Data
  useEffect( () =>{fetch("https://restcountries.com/v3.1/all").then( response => response.json()).then(data => {setcountries(data)})  },[])
  
  return (
    <>
    <Searchb input={input} handleInput={handleInput}/>
    <CountryDisplay countries={countries} regex={regex} handleCountryShow={handleCountryShow} countryShow={countryShow}/>
    </>
  )
}





export default App;
