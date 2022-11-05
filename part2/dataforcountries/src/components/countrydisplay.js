
import CountryInfo from "./countryinfo"



//Main Component Choose display message for more 10 countrys results,countries names when is <10,country info when someone click on show button or when is only one country on the search, 
const CountryDisplay = ({countries,regex,handleCountryShow,countryShow}) => {

    //functions
const countriesFilter = (Arr) => Arr.filter(el=>regex.test(el.name.common.toLowerCase()));
let country={...countriesFilter(countries)[0]} //when only have one country, rest {[]} for only pass the country as object
const countriesFilterLength = countriesFilter(countries).length; 
    
return(
<div>
{
countryShow[0]?<CountryInfo country={countriesFilter(countries).find(el=>el.name.common===countryShow[1])}/> : //countryshow=[true or false, name country clicked for show]:
countries.length<1 ? <p>fetching data</p>:
countriesFilterLength>9 ? <p>Too Many Matches, specify another filter </p>:
countriesFilterLength===1 ? <CountryInfo country={country} />:
countriesFilter(countries).map(el=><div key={el.name.common}><p >{el.name.common}</p><button value={el.name.common} onClick={handleCountryShow}>Show</button></div>)
}
</div>
)

}



export default CountryDisplay