


const AddForm = ({handleSubmit,newName,handleInputName,newNumber,handleInputNumber}) =>{
return (
<>
    <h2>Add a new</h2>
        <form onSubmit={handleSubmit}>
            <div>name: <input value={newName} onChange={handleInputName} /></div> 
            <div>number:<input value={newNumber} onChange={handleInputNumber}/></div>
            <div><button type="submit"  >add</button></div>
      </form>
</>
)
}



export default AddForm