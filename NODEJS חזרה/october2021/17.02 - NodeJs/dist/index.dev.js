"use strict";

var express = require('express');

var app = express();
var PORT = procces.env.PORT || 5050;
app.use(express["static"]('public')); // app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })
// 21.02.22 - NodeJs\index.js - 32:00

app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});