

//functions
const mapPers = (Arr,handleDelete) => Arr.map((el,i)=><div key={i}><p >{el.name} {el.number}</p><button value={el.id} onClick={handleDelete} >Delete</button></div>) //function to map persons Arr in p elements
const filterPers = (Arr,regex) => Arr.filter(el => regex.test(el.name.toLocaleLowerCase())) //function to filter persons Arr with regex and return newArrayfilter


//Main component
const ShowNums = ({search,regex,persons,handleDelete}) => <><h2>Numbers</h2> <div>{search ? mapPers(filterPers(persons ,regex), handleDelete): mapPers(persons, handleDelete)}</div> </>;


export default ShowNums;