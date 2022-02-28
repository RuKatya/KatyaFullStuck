const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser') //do not need to install

app.use(cookieParser());
app.use(express.static('public'))
app.use(bodyParser.json())

const users = [
    { username: 'Katya', password: '123', role: 'admin' },
    { username: 'Olga', password: '123', role: 'public' }
]

app.post('/login', (req, res) => {

    //create cookie that set the role of user

    //check user
    const { username, password } = req.body;

    let isUserExist = true
    let role = 'denied'

    const indexUser = users.findIndex(user => user.username === username && user.password === password);
    if (indexUser > -1) { //-1 = if not found
        isUserExist = true
        role = users[indexUser].role
    }

    res.cookie('role', role, { maxAge: 20000, httpOnly: true }) //client cant chenge the cookie, only the server
    res.send({ ok: isUserExist }) //check if work
})


app.get('/admin-panel', isAdmin, (req, res) => { //server check if autorized is true, if yes we can check the information, if no, there no enter in the information
    if (res.autorized) {
        res.send({ data: 'all critical information' })
    } else {
        res.status(403)
        res.send({ ok: false })
    }
})

function isAdmin(req, res, next) { //to check the role of person
    const { role } = req.cookies

    if (role === 'admin') { //if role = admin => response atutorized true
        res.autorized = true
    }

    next();
}


const port = process.env.PORT || 1010
app.listen(port, () => {
    console.log(`server work ${port} !`)
})