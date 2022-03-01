"use strict";

// import express from 'express';
var express = require('express');

var app = express();
var PORT = process.env.PORT || 5050;
app.use(express["static"]('public'));
app.get('/geme', function (req, res) {
  res.status(200).send({
    name: "Katya",
    age: 25
  });
});
app.get('/gemefriend', function (req, res) {
  res.status(200).send({
    name: "Katya",
    age: 25
  });
});
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});