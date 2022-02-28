const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())

app.post('/sendMulti', (req, res) => {

    try {
        const { multi } = req.body

        if (typeof multi !== 'number') throw new Error('multi is not a number') //if error write "not number" //ERROR HENDLING

        res.send({ number: multi * 10 })
    } catch (e) {
        console.log('at sendMulti', e); //if catch error return 0 and false
        res.send({ number: 0, ok: false, error: e })
    }
})

const port = process.env.port || 3232;
app.listen(port, () => {
    console.log(`listening for ${port}`)
})