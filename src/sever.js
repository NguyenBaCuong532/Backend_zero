const express = require('express');
const app = express();
const path=require('path');
const configViewEngine =require('./config/viewsEngine');
require('dotenv').config();

const port =process.env.PORT || 8888;
const hostname=process.env.HOST_NAME;
//config template engine
configViewEngine(app);

app.get('/', function (req, res) {
  res.send('Hello World 123')
})

app.get('/abc', function (req, res) {
  res.send('Check ABC')
})
app.get('/cuongnb', function (req, res) {
  res.render('sample.ejs')
})




app.listen(port,()=>{
console.log(`Server running at http://${hostname}:${port}/`)
})