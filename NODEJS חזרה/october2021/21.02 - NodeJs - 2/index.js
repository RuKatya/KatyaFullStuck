const { query } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static('public'));

const data = [
    { name: "Katya", age: 1, id: "1", gender: "female" },
    { name: "Musya", age: 2, id: "2", gender: "female" },
    { name: "Pusya", age: 3, id: "3", gender: "male" },
    { name: "Kasha", age: 4, id: "4", gender: "male" },
]

app.get('/get-users', (req, res) => {
    console.log(req.query)
    const { gender } = req.query
    if (gender) {
        console.log(gender)
        const filterUserGen = data.filter(user => user.gender === gender)
        console.log(filterUserGen)
        res.send(filterUserGen)
    }
    // res.send(data);
})

app.get('/get-users-slider', (req, res) => {
    console.log(req.query)
    const { age } = req.query
    if (age) {
        console.log(age)
        const filterUserAge = data.filter(user => user.age == age)
        console.log(filterUserAge)
        res.send(filterUserAge)
    }
    // res.send(data);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})