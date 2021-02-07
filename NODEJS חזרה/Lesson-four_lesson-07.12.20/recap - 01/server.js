const express = require('express')
const app = express() //many function of express

app.use(express.static('public')) //all static files, that client get: html, js, img. css (not statics files is req of get and so)


//------------------how to get from the client------------
//If we have file in public of HTML that the name is diffrent from index (ex: index33.html) we can write localhost:5000/index33.html and it will be returned

//send random number
// app.get('/get-random-number', (req, res) => { //the server is search for fetch with the same name in client
//     //req=request from client; res=response to client

//     res.send({ number: Math.floor(Math.random() * 10) })

// })


//-------------------how to sent to the client --------------

app.get('/get-random-number', (req, res) => {

    res.send({ number: Math.floor(Math.random() * 1000) })
})

const port = process.env.PORT || 5000 //פורט על השרת או פורט 5000
app.listen(port, () => { //listen to clients requests
    console.log(`server work ${port} !`)
})