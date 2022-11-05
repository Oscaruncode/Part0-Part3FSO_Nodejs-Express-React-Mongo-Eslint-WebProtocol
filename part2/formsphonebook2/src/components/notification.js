






Notification = ({message}) => {
if(!message){return null}       //Invisible default
if(message[0]=="404"){            //error user not found
    return (<h2 className="error">Information of {message[1]} has already been removed from the server</h2>)
}
return(<h2 className="message">{message}</h2>)  //Notification Add or update user
}



export default Notification