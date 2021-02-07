const express = require('express')
const app = express()
const moment = require('moment')

app.use(express.static('public'))

app.get('/get-time', (req, res) => {
    // let time = new Date().getTime();
    let time = moment().format('LTS');
    res.send({ time })

    console.log(`${time}`)
})

let timeOnTheSite = 0;


app.get('/get-time-on-site', (req, res) => {
    res.send({ timeOnTheSite })
    timeOnTheSite++;
})


const port = 5000

app.listen(port, () => {
    console.log(`server work ${port} !`)
})