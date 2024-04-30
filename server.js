const express = require('express')
const app = express()
const db = require('./db')

const Person = require('./Models/Person')

const MenuItem = require('./Models/MenuItem')

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Welcome to Hotel')
})

app.listen(3001,()=>{
    console.log("Listening on port 3001")
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu',menuItemRoutes);