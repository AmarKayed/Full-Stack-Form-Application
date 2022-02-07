import React from "react";
import './App.css'
// import Form from './components/Form/Form.js'
import { useState } from "react";
import axios from 'axios';

const App = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);


  const addEmployee = () => {
    console.log(name, age, country, position, wage);
    axios.post('http://localhost:3000/create', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then(() => {
      console.log("success");
    });

  };

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
      
    </div>
  );
}

export default App;
