const express = require('express')
const app = express()


const cors = require('cors');
app.use(cors());        // This fixes the error from the Axios request to the backend
app.use(express.json()); // This fixes the error of parsing the body from the frontend to the backend as a json object


app.post('/create', (req, res) => {
  // console.log(req.body);
  console.log(req.body.name);
  res.send(req.body.name);
})

app.listen(3001, () => {
  console.log("listening to port 3001...")
})