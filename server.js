const express = require('express');
const app = express();
const port = 3000;

// Routers
app.get('/', homepage) 
app.get('/Sheina', aboutMe) 

//Controllers
function homepage(req, res) {
    res.send('Welcome to my HomePage')
}

function aboutMe(req, res){
    res.send('About Me')
}


// runs
app.listen(3000)
