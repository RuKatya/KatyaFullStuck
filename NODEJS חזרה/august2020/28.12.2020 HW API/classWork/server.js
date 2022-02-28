const express = require('express')
const app = express(); ///server;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { response } = require('express');
const fetch = require('node-fetch');

app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/sendCity', (req, res) => {
    const { myCity } = req.body;

    console.log(myCity)

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=84dda819f36a2f81e3babdb748579c85`)
        .then(r => r.json())
        .then(weather => {
            res.send({ ok: true, weather })
        })
})

const PORT = 3535;
app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`)
})