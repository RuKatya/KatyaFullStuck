const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser') //do not need to install

app.use(cookieParser());
app.use(express.static('public'))
app.use(bodyParser.json())

const users = [
    { username: 'Katya', password: '123' },
    { username: 'Olga', password: '123' }
]

app.post('/login', (req, res) => {

    //check user
    const { username, password } = req.body;

    const indexUser = users.findIndex(user => user.username === username && user.password === password);
    if (indexUser > -1) { //-1 = if not found
        res.cookie('user', username, { maxAge: 50000, httpOnly: true })

        ok = true;
    } else {
        console.log('oh no!')
    }

})







const port = process.env.PORT || 1111
app.listen(port, () => {
    console.log(`server work ${port} !`)
})