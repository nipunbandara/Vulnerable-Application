import React, {useState} from 'react';
import axios from 'axios';


export default function AddEmployee(){
    
    let [name, setName] = useState("");
    let [age, setAge] = useState();
    let [gender, setGender] = useState("");

    function sendData(e){
        //e - event, because sendData is an event
        e.preventDefault(); //form submit default is to send data to another site. to prevent default behavior this is used

        const newEmployee = {
            name,
            age,
            gender
        }
       
        axios.post('http://localhost:8070/employee/add', newEmployee)
        .then(()=>{
            alert('Employee Added');

            setName("");
            setAge();
            setGender("");
        })
        .catch((err) =>{
            alert(err);
        });

        //can use this on button as onClick or on form as onSubmit
    }
    
    return(

        <div className = "container" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
        <form onSubmit = {sendData}>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" pattern="^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$" onChange = {(e) => {
                    setName(e.target.value); //assigning filled value on input field to state variable name
                }}/>
                
            </div>
            <div className="form-group">
                <label for="age">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter age" onChange = {(e) => {
                    setAge(e.target.value); 
                }}/>
                
            </div>
            <div className="form-group">
                <label for="name">Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" onChange = {(e) => {
                    setGender(e.target.value); 
                }}/>
                
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        )
}