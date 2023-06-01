const express = require('express');
const connectDB = require('./config/db');
const {flushData, loadData} = require('./data/load-data');
const Platform = require('./models/platformModel');
const app = express();

connectDB();

flushData();
loadData();


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res)=>{
    try{
        const data = await Platform.find({});
        console.log(data);
        res.render('home', {data:data});
    }
    catch(err){
        console.log(err);
        process.exit();
    }
})

module.exports = app;