const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology:true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
})

db.on('error',()=>{
    console.log('Connection error');
})

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})


module.exports = db;