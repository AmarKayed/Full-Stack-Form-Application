const express = require('express')
const app = express()
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "fullstackformwebapplication"
});


const cors = require('cors');
app.use(cors());        // This fixes the error from the Axios request to the backend
app.use(express.json()); // This fixes the error of parsing the body from the frontend to the backend as a json object


app.post('/create', (req, res) => {
  // console.log(req.body);
  console.log(req.body.name);
  // res.send(req.body.name);

  const {name, age, country, position, wage} = req.body;
  console.log(name, age, country, position, wage);

  db.query(
    'INSERT INTO employees(name, age, country, position, wage) VALUES(?, ?, ?, ?, ?)',
    [name, age, country, position, wage],
    (err, result) => {
      if(err)
        console.log(err);
      else
        res.send("Values Inserted");
    })

})


app.get('/getEmployees', (req, res) => {
  db.query('SELECT * FROM employees', (err, result) => {
    if(err)
      console.log(err);
    else
      res.send(result);
  });
})


app.listen(3001, () => {
  console.log("listening to port 3001...")
})