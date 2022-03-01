// import express from 'express';
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static('public'));

app.get('/geme', (req, res) => {
    res.status(200).send({ name: "Katya", age: 25 });
})

app.get('/gemefriend', (req, res) => {
    res.status(200).send({ name: "Katya", age: 25 });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})