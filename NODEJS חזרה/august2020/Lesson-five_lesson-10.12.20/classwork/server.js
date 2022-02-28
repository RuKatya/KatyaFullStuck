const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser'); //מפרש עוגיות

app.use(cookieParser());
app.use(bodyParser.json())

app.use(express.static('public'))


app.post('/get-cookie', (req, res) => {
    let { userCookie } = req.cookies
    const userClient = req.body.username
    let cookie = false

    res.cookie('userCookie', userClient, { maxAge: 5000000, httpOnly: true });
    res.send({ username: userClient, cookie: false })

})

const port = process.env.PORT || 2525
app.listen(port, () => {
    console.log(`server work ${port} !`)
})