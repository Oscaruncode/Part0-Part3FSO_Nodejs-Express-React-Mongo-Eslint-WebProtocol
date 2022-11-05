

//functions
const mapPers = (Arr) => Arr.map((el,i)=><p key={i}>{el.name} {el.number}</p>) //function to map persons Arr in p elements
const filterPers = (Arr,regex) => Arr.filter(el => regex.test(el.name.toLocaleLowerCase())) //function to filter persons Arr with regex and return newArrayfilter


//Main component
const ShowNums = ({search,regex,persons}) => <><h2>Numbers</h2> <div>{search?mapPers(filterPers(persons,regex)):mapPers(persons)}</div> </>;


export default ShowNums;