"use strict";

var _require = require('express'),
    query = _require.query;

var express = require('express');

var app = express();
var PORT = process.env.PORT || 5050;
app.use(express["static"]('public'));
var data = [{
  name: "Katya",
  age: 1,
  id: "1",
  gender: "female"
}, {
  name: "Musya",
  age: 2,
  id: "2",
  gender: "female"
}, {
  name: "Pusya",
  age: 3,
  id: "3",
  gender: "male"
}, {
  name: "Kasha",
  age: 4,
  id: "4",
  gender: "male"
}];
app.get('/get-users', function (req, res) {
  console.log(req.query);
  var gender = req.query.gender;

  if (gender) {
    console.log(gender);
    var filterUserGen = data.filter(function (user) {
      return user.gender === gender;
    });
    console.log(filterUserGen);
    res.send(filterUserGen);
  } // res.send(data);

});
app.get('/get-users-slider', function (req, res) {
  console.log(req.query);
  var age = req.query.age;

  if (age) {
    console.log(age);
    var filterUserAge = data.filter(function (user) {
      return user.age == age;
    });
    console.log(filterUserAge);
    res.send(filterUserAge);
  } // res.send(data);

});
app.listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});