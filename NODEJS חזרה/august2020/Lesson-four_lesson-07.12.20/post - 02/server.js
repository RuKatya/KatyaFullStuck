const express = require('express')
const app = express()
const bodyParser = require('body-parser') //adidng without install

app.use(bodyParser.json()) //for reading sendind data //return req.body = body (from client)

app.use(express.static('public'))



app.post('/send-text', (req, res) => { //sending (getting it from js)

    console.log(req.body) //request from the client

    res.send({ ok: true, body: req.body.value }) //for check
})





const port = process.env.PORT || 2000
app.listen(port, () => {
    console.log(`server work ${port} !`)
})