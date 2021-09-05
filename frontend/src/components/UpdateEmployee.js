import React, {useState} from 'react';
import axios from 'axios';

export default function UpdateEmployee(){

    let [name, setName] = useState("");
    let [age, setAge] = useState();
    let [gender, setGender] = useState("");

    function sendData(e){
        //e - event, because sendData is an event
        e.preventDefault(); //form submit default is to send data to another site. to prevent default behavior this is used

        const updateEmployee = {
            name,
            age,
            gender
        }
       
        axios.put('http://localhost:8070/employee/update/:id', updateEmployee)
        .then(()=>{
            alert('Student Added');

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
        <div className = "container">
        <form>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange = {(e) => {
                   // setName(e.target.value); //assigning filled value on input field to state variable name
                }}/>
                
            </div>
            <div className="form-group">
                <label for="age">Age</label>
                <input type="number" className="form-control" id="age" placeholder="Enter age" onChange = {(e) => {
                   // setAge(e.target.value); 
                }}/>
                
            </div>
            <div className="form-group">
                <label for="name">Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" onChange = {(e) => {
                  //  setGender(e.target.value); 
                }}/>
                
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        )

}