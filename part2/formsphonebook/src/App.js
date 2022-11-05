import { useState } from 'react'
import FilterInput from "./components/filtersearch"
import ShowNums from './components/shownums'
import AddForm from "./components/add"


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id:1}
  ]) 
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [search, setSearch] = useState("")

const handleSubmit = (e) => {e.preventDefault(); persons.find(el=>el.name===newName) ? alert(`${newName} is already add to the  phone`) :setPersons([...persons,{"name":newName,"number": newNumber, id:persons.length+1}])}
const handleInputName = (e) => setNewName(e.target.value);
const handleInputNumber = (e) => setNewNumber(e.target.value);
const handleInputSearch = (e) => setSearch(e.target.value);

const regex= new RegExp(`^${search.toLowerCase()}`);

  return (
    <>
       <FilterInput search={search} handleInputSearch={handleInputSearch}/>
       <AddForm handleSubmit={handleSubmit} newName={newName} handleInputName={handleInputName} newNumber={newNumber} handleInputNumber={handleInputNumber}/>
       <ShowNums persons={persons} regex={regex} search={search}/>
    </>
  )
}

export default App


