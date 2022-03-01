"use strict";
exports.__esModule = true;
var express_1 = require("express");
// const express = require('express');
var app = express_1["default"]();
var PORT = process.env.PORT || 5050;
app.use(express_1["default"].static('public'));
app.get('/geme', function (req, res) {
    res.status(200).send({ name: "Katya", age: 25 });
});
app.get('/gemefriend', function (req, res) {
    res.status(200).send({ name: "Katya", age: 25 });
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:" + PORT);
});
