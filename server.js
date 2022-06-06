const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('Home Page')
})

app.get('/Sheina', helloWorld) 

function helloWorld(req, res){
    res.send('Hello World')
}

// runs
app.listen(3000)
