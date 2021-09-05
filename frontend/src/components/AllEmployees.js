import React, {useState, useEffect} from 'react';
//use effect is used to show what to show in a page component-dead-mount for class method
import axios from 'axios';

export default function AllEmployees(){

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        //where and how data is received
        function getEmployees(){
            axios.get('http://localhost:8070/employee/') //json.token is used as middleware when user login and authenticate json file. it is used as 2nd parameter in axios
            .then((res)=>{
                //console.log(res.data);
                setEmployees(res.data);

            }).catch((err) => {
                alert(err.message);
            });
        }
        getEmployees();
    }, [] /*empty array*/);

   
    return (
        <div>
            {employees.map(emp => (
                <div>
                    <p>{emp.name}</p>
                    <p>{emp.age}</p>
                </div>
            ))}
        </div>
    )

    
}

