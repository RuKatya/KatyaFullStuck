//first: npm init--y
const http = require('http'); //we didnt install anything when we want to use http labrory, because we alredy have it in node
//For all documentation we can enter to: node js in search -> DOCS -> v14.15.1 API (the version of node today)

http.createServer((req, res) => { //create a server object - בקשה של לקוח-הסקריפט, תגובה
    res.write('<h1>Hello World</h1><p>Hello</p>'); //write a response to the client - בתגובה לרשום 
    res.end(); //end the response - תגובה נגמרת. סוף השידור
}).listen(8000, () => { //the server pbject listens on port 8000 - מקשיב נמל 8000
    console.log('Server is in on!') //for be sure that is lisening
});

//after we can enter in brauser to-> localhost:8000 and see what we did
///if i want to see the chengese i need to tern off the server and turn on back the server-> CTRL + C

//for not off/on the server wecan install nodemon = node monitor. its update the server online: npm install/i -g nodemon (install global=for every thing we will create)

//if the terminal is on powershell need to enter: cmd => the terminal will change to cmd and after we can use the nodemon usual