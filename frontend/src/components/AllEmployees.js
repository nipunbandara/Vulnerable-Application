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
                //console.log(res.data.existingEmployees);
                setEmployees(res.data.existingEmployees);

            }).catch((err) => {
                alert(err.message);
            });
        }
        getEmployees();
    }, [] /*empty array*/);

    function filterData(employees, searchkey){
        const result = employees.filter((employee) =>
            employee.name.toLowerCase().includes(searchkey)
        );
        //console.log(result);
        setEmployees(result);
    }
    
    function handleSearchArea(e){
   
        const searchValue = document.getElementById('search').value;
        const message = document.getElementById('message');
        message.innerHTML = 'You searched for: ' + searchValue;

        const searchkey = searchValue;
        axios.get("http://localhost:8070/employee/").then(res => {
            if(res.data.success){
                filterData(res.data.existingEmployees, searchkey)
            }
        });
    }
    

    return (
        <div>
            <div className="row g-3" style={{marginTop : 50}}>
                <input className="form-control" id = "search" type="search" placeholder="Search" aria-label="Search" style={{width : 500, marginInline : 200}}></input>
                <button className="btn btn-outline-success my-2 my-sm-0 mb-3" type="submit" onClick = {handleSearchArea}>Search</button>
            </div>
            <br/>        
            <h1 id = "message"></h1>
            <table className="table table-hover table-bordered" style={{marginBlock : 50}}>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                {employees.map(emp => (
                    <tr key = {emp._id}>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </div>
    )

}

