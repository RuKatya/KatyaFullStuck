const express = require('express');
const app = express();

//body parser
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'))

// mongoose
const mongoose = require('mongoose'); //npm i mongoose
const url = 'mongodb+srv://KatyaRu:qHO9SxoCGZc6lv7C@cluster0.mfqlq.mongodb.net/test'; // the /test creat folder names test

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }); //connectin to the db






const port = process.env.PORT || 5252;
app.listen(port, () => console.log('server listen on port ', port))