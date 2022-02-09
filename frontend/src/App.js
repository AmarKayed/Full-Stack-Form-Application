import React from "react";
import './App.css'
import Form from './components/Form/Form.js'
import { useState , useEffect } from "react";
import Axios from 'axios';
// import SearchBar from "./components/SearchBar/SearchBar";
import Modal from './components/Modal/Modal.js'
import DeleteButton from "./components/DeleteButton/DeleteButton";

const App = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);


  const [employees, setEmployees] = useState([])

  const addEmployee = () => {
    // console.log(name, age, country, position, wage);
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then(() => {
      console.log("success");
      setEmployees([...employees, 
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage
        }
      ])
    });

  };


  const getEmployees = () => {
    Axios.get("http://localhost:3001/getEmployees")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
  }

  const existEmployees = employees.length === 0 ? false : true;

  useEffect(()=>{
    console.log(employees, existEmployees);
  }, [])

  // useEffect(()=>{
  //   console.log(name);
  // }, [name])

  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = (event) => {
      setSearchValue(event.target.value);
  }
  const clearSearchBar = () => {
    setSearchValue('');
  }
  const filteredEmployees = employees.filter((employee) => {return employee.name.includes(searchValue)})

  return (
    <div className="App">

      <div className = "formArea">
        
        <Form label = "Name" type = "text" state = {name} setState = {setName} />
        <Form label = "Age" type = "number" state = {age} setState = {setAge} />
        <Form label = "Country" type = "text" state = {country} setState = {setCountry} />
        <Form label = "Position" type = "text" state = {position} setState = {setPosition} />
        <Form label = "Wage(year)" type = "number" state = {wage} setState = {setWage} />
        
      </div>

      <button className = "submitButton" onClick={addEmployee}>Add Employee</button>
      <hr></hr>
      <button className = "showEmployees" onClick={getEmployees}>Show Employees</button>
      
      {existEmployees && 
        <div className = "employees">

          <input className = "searchBar" type = "text" placeholder = "Search By Name" value = {searchValue} onChange = {updateSearchValue}></input>
          {/* <button className = "clearButton" onClick={clearSearchBar}>Clear</button> */}

          {
          employees
            .filter((employee) => {
              return employee.name.includes(searchValue)
            })
            .map((value) => {
              return (
                <div className = "employee" key = {value.name} style = {{positon: 'relative'}}>
                  <Modal />
                  <ul>
                    <li>Name: <p>{value.name}</p></li>
                    <li>Age: <p>{value.age}</p></li>
                    <li>Country: <p>{value.country}</p></li>
                    <li>Position: <p>{value.position}</p></li>
                    <li>Wage: <p>{value.wage}</p></li>
                    <DeleteButton employee = {value} employees = {employees} setEmployees = {setEmployees}/>
                  </ul>
                </div>
              )
            
          })
          }
        </div>
      }
    </div>
  );
}

export default App;
