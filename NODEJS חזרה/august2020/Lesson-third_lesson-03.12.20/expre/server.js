//1. npm init --y
//2. npm i express
//3. cmd
//4. const express = require('express')
//5. const app = express()
//for suciure the files we do public folder, then "haker" cant get the server
//get-תביא מידע  post- תכתוב מידע put - תעדכן מידע delete - תמחק מידע

const express = require('express') //for using the librory
const app = express()

//midleware    
app.use((req, res, next) => { //כל קריא שמישהו יקרה תעבור דרך פונקציה הזאת ויקרה משהו, למשל יקרא קוקיס ויחזיר מידע עליהם
        console.log(`someone calles the server: ${req.url} and I have ${numberOfDogs} dogs`)
        next() //must to write next() other it will stop search other files
    })
    /*
    someone calles the server: / and I have 3 dogs
    someone calles the server: /style.css and I have 3 dogs
    someone calles the server: /img.jpg and I have 3 dogs
    someone calles the server: /js.js and I have 3 dogs
    someone calles the server: /get-number-of-dogs and I have 3 dogs
    */

app.use(express.static('public')) //runing the files in public folder, without write everything one by one
    //if we have another file, that we have in public, we can see him if we will write the name of the file after localhost->
    //http://localhost:3000/secret.html

let numberOfDogs = 3; //how many dogs we have

app.get('/get-number-of-dogs', (req, res) => { //get number of dogs - כשאתה תופס את המספר של הכלבים תשלח מספר של הכלבים
        res.send({ numberOfDogs }) //בתגובה תתן מספר של הכלבים
            // numberOfDogs++;
    }) //the server response to the client
    //in get get and fetch the name of file must to be the same!!!


const port = 3000 //the localhost
app.listen(port, () => {
    console.log(`SERVER WORK ${port}!`) //for be sure that is work
})