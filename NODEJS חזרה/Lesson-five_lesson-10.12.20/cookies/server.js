const express = require('express')
const app = express()

const cookieParser = require('cookie-parser'); //מפרש עוגיות
//for install: npm i cookie-parser
app.use(cookieParser());



app.use((req, res, next) => {

    // const { cookies } = req; //const { cookies } = req; =req.cookies //also const { cookies, body } = req; = req.cookies, req.body

    const { iFollowYou } = req.cookies; //cookie with name iFollowYou

    const currentDate = new Date().getDate()

    console.log(iFollowYou)

    if (!iFollowYou) { //if we dont have in the site this cookie put it
        res.cookie('iFollowYou', `This-is-my-cookie..You-get-in-on-${currentDate}`, { macAge: 5000 /*5000 שניות*/ }) //1.cookie name, 2. cookie num || text of cookie, 3.how long it will be on the site, 4. only server can use the cookie and the client is not
    }

    res.message = iFollowYou
    next();
})

app.get('/', (req, res) => {
    res.send(`<h1>${res.message}</h1>`) //for see the cookie on index //reload the text that we have on page
})



app.use(express.static('public'))

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server work ${port} !`)
})