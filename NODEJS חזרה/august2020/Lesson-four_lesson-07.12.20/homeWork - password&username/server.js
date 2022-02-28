const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// const cookieParser = require('cookie-parser'); //מפרש עוגיות

// app.use(cookieParser());
app.use(bodyParser.json())
app.use(express.static('public'))

let usersAll = [
        { username: 'Katya', password: '123' },
        { username: 'Kat', password: '111' }
    ]
    // let username = { 'Katya' };
    // let password = { 123 };
    // const userServer = { username, password }


app.post('/check-login', (req, res) => {

    let userFromClient = req.body.usernameCheck
    let passFromClient = req.body.passwordCheck


    console.log(userFromClient, passFromClient)

    // console.log(req.body)

    let found = false;

    usersAll.forEach(user => {
        if (user.username == userFromClient && user.password == passFromClient) {
            found = true;
        }
    })


    if (found == true) {
        res.send({
            ok: true,
            body: userFromClient,
            // pass: passFromClient
        })
    } else {
        res.send({
            ok: false,
            body: userFromClient,
            // pass: passFromClient
        })
    }

})

const port = process.env.PORT || 2525
app.listen(port, () => {
    console.log(`server work ${port} !`)
})