
import './App.css';
import AddEmployee from './components/AddEmployee';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AllEmployees from './components/AllEmployees';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeDetails from './components/EmployeeDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>

     
      <Route path = "/add" exact component = {AddEmployee} />
      <Route path = "/update/:id" exact component = {UpdateEmployee} />
      <Route path = "/" exact component = {AllEmployees} />
      <Route path = "/:id" component = {EmployeeDetails}/>
     
    </div>
    </Router>
  );
}

export default App;
