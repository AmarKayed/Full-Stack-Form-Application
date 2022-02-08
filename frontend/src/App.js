import React from "react";
import './App.css'
// import Form from './components/Form/Form.js'
import { useState } from "react";
import Axios from 'axios';

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
    });

  };


  const getEmployees = () => {
    Axios.get("http://localhost:3001/getEmployees")
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
  }

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
      {employees && 
        <ul>
          {
          employees.map((value, index) => {
            return <li>{value.name}</li>
          })
          }
        </ul>
      }
    </div>
  );
}

export default App;
