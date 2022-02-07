const express = require('express')
const app = express()


app.post('/create', (req, res) => {
  console.log(req.body.name);
  res.send(req.body.name);
})

app.listen(3001, () => {
  console.log("listening to port 3001...")
})