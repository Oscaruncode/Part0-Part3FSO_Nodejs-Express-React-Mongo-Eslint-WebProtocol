import axios from "axios";

const urlPersons= "http://localhost:3001/persons"

const getAll = ()=> { 
   return axios.get(urlPersons).then(response=> response.data)
}

const create= (newObject) => {
    return axios.post(urlPersons,newObject).then(response=>response.data)
}

const remove = (id) =>{
    return axios.delete(`${urlPersons}/${id}`).then(response=>response.data)
} 

const update = (id,person) =>{
    return axios.put(`${urlPersons}/${id}`,person).then(response=>response.data)
}


export default {getAll,create,remove,update}