const express = require('express');
const app = express();
const port = 3000;

// Routers
app.get('/', homepage) 
app.get('/Sheina', aboutMe) 
app.get('/Projects', myProjects)

//Controllers
function homepage(req, res) {
    res.send('Welcome to my HomePage')
}

function aboutMe(req, res){
    res.send('About Me')
}

function myProjects(req, res){
    res.send('My Projects')
}

// runs
app.listen(3000)
