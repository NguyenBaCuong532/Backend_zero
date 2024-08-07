const express = require('express');
const app = express();
require('dotenv').config();
const port =process.env.PORT || 8888;
const hostname=process.env.HOST_NAME;
console.log(process.env.PORT)||8888;
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/abc', function (req, res) {
  res.send('Check ABC')
})

app.listen(port,()=>{
console.log(`Server running at http://${hostname}:${port}/`)
})