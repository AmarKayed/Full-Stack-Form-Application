import React from "react";
import './App.css'
// import Form from './components/Form/Form.js'
import { useState , useEffect } from "react";
import Axios from 'axios';
// import SearchBar from "./components/SearchBar/SearchBar";

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


  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = (event) => {
      setSearchValue(event.target.value);
  }

  const filteredEmployees = employees.filter((employee) => {return employee.name.includes(searchValue)})

  return (
    <div className="App">
      <div className = "formArea">
        <form>
          <label>Name:</label>
          <input type = "text" onChange={(event) => {setName(event.target.value); }}></input>
        </form>
      
        <form>
          <label>Age:</label>
          <input type = "number" onChange={(event) => {setAge(event.target.value)}}></input>
        </form>

        <form>
          <label>Country:</label>
          <input type = "text" onChange={(event) => {setCountry(event.target.value)}}></input>
        </form>

        <form>
          <label>Position:</label>
          <input type = "text" onChange={(event) => {setPosition(event.target.value)}}></input>
        </form>

        <form>
          <label>Wage(year):</label>
          <input type = "number" onChange={(event) => {setWage(event.target.value)}}></input>
        </form>

        {/* 
        <Form label = "Name" type = "text" />
        <Form label = "Age" type = "number" />
        <Form label = "Country" type = "text" />
        <Form label = "Position" type = "text" />
        <Form label = "Wage(year)" type = "number" />
         */}

      </div>

      <button className = "submitButton" onClick={addEmployee}>Add Employee</button>
      <hr></hr>
      <button className = "showEmployees" onClick={getEmployees}>Show Employees</button>
      
      {existEmployees && 
        <div className = "employees">

        <input className = "searchBar" type = "text" placeholder = "Search By Name" value = {searchValue} onChange = {updateSearchValue}></input>
    

          {
          employees
            .filter((employee) => {
              return employee.name.includes(searchValue)
            })
            .map((value) => {
              return (
                <ul className = "employee" key = {value.name}>
                  <li>Name: <p>{value.name}</p></li>
                  <li>Age: <p>{value.age}</p></li>
                  <li>Country: <p>{value.country}</p></li>
                  <li>Position: <p>{value.position}</p></li>
                  <li>Wage: <p>{value.wage}</p></li>
                  
                </ul>
              )
            
          })
          }
        </div>
      }
    </div>
  );
}

export default App;
