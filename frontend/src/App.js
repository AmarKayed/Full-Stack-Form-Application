import React from "react";
import './App.css'
// import Form from './components/Form/Form.js'

const App = () => {
  return (
    <div className="App">
      <div className = "formArea">
        <form>
          <label>Name:</label>
          <input type = "text"></input>
        </form>
      
        <form>
          <label>Age:</label>
          <input type = "number"></input>
        </form>

        <form>
          <label>Country:</label>
          <input type = "text"></input>
        </form>

        <form>
          <label>Position:</label>
          <input type = "text"></input>
        </form>

        <form>
          <label>Wage(year):</label>
          <input type = "number"></input>
        </form>

        {/* 
        <Form label = "Name" type = "text" />
        <Form label = "Age" type = "number" />
        <Form label = "Country" type = "text" />
        <Form label = "Position" type = "text" />
        <Form label = "Wage(year)" type = "number" />
         */}

      </div>

      <button className = "submitButton">Add Employee</button>
      
    </div>
  );
}

export default App;
