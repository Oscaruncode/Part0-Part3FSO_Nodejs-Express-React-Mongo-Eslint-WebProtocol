import { useEffect, useState } from 'react'
import FilterInput from "./components/filtersearch"
import ShowNums from './components/shownums'
import AddForm from "./components/add"
import personService from "./services/personService"
import Notification from './components/notification'


const App = () => {
//States
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")
  const [message, setMessage] = useState(null)

//functions
const findPerson = (personsArr) => personsArr.find(el=>el.name===newName);
//const
const newObject =  {"name":newName,"number": newNumber}
const regex= new RegExp(`^${search.toLowerCase()}`);

//handleFunctions
const handleSubmit = (e) => {e.preventDefault();
  const foundPerson=findPerson(persons);
  if(foundPerson){
        if(window.confirm(`${newName} is already add in the phone,Do you want add a new num?`)){
           personService.update(foundPerson.id,newObject).then(returnedPerson=>{setPersons(persons.map(el=>el.id!==returnedPerson.id?el:returnedPerson));
            setMessage(`The phonenumber of ${returnedPerson.name} was changed to ${returnedPerson.number}`); setTimeout(()=>setMessage(null), 5000 ) //notification
            setNewName("");setNewNumber("")  //reset input field
          }).catch(err=> {setMessage([err.response.status,newName]); setTimeout(()=> setMessage(null),5000 );setNewName("");setNewNumber("")  })
        }
  }
  else{
    personService.create(newObject).then(data=> {setPersons([...persons,data]);
      setMessage(`The contact ${newName} was add`); setTimeout(()=>setMessage(null), 5000);
        setNewName("");setNewNumber("")  //reset input field
    }) 
  }
}
const handleInputName = (e) => {setNewName(e.target.value)};
const handleInputNumber = (e) => {setNewNumber(e.target.value)};
const handleInputSearch = (e) => {setSearch(e.target.value)};

const handleDelete = (e) => { if(window.confirm(`Are you sure that you want delete the user`)){
  personService.remove(e.target.value).then(()=>setPersons(persons.filter(el=>el.id!=e.target.value)))
  }
} 

useEffect( ()=>{personService.getAll().then((data)=>{setPersons(data)})},[] )



return (
    <>
       <FilterInput search={search} handleInputSearch={handleInputSearch}/>
       <Notification message={message}/>
       <AddForm handleSubmit={handleSubmit} newName={newName} handleInputName={handleInputName} newNumber={newNumber} handleInputNumber={handleInputNumber}/>
       <ShowNums persons={persons} regex={regex} search={search} handleDelete={handleDelete}/>
    </>
  )
}

export default App

