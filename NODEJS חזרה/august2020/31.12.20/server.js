const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
    //if we want to use 2 servers, add in package.json under "start" another name of server
    //in terminal we turn on the servers with -> npm run start & npm run numbers


app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))


app.post('/get-num', (req, res) => {

    try {
        const { upperNumber } = req.body

        if (typeof upperNumber !== 'number') throw new Error('upperNumber is not a number') //if error write "not number"

        res.send({ number: Math.floor(Math.random() * upperNumber) }) //for check
    } catch (e) {
        console.log('at get-num', e)
    }
})

const port = process.env.port || 3131;
app.listen(port, () => {
    console.log(`listening for ${port}`)
})