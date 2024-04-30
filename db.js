const mongoose = require('mongoose');

require('dotenv').config();

//const mongoURL = process.env.db_URL_LOCAL;
const mongoURL = process.env.db_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',(error)=>{
    console.log('Connection error:', error);
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

module.exports = db;
