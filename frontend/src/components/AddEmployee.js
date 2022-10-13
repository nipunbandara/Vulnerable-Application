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
       
        const pattern = new RegExp(name, "gi");
        const result = pattern.test(gender);

        if(!result) {
            console.log('The strings are not similar.');
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

        } else {
            console.log('Username and password cannot be similar');
            console.log('The strings are not similar.');
        }
        //can use this on button as onClick or on form as onSubmit
    }
    
    return(

        <div className = "container" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
        <form onSubmit = {sendData}>
            <div className="form-group">
                <label for="name">Username</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" onChange = {(e) => {
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
                <label for="name">Password</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter gender" onChange = {(e) => {
                    setGender(e.target.value); 
                }}/>
                
            </div>
              <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        )
}