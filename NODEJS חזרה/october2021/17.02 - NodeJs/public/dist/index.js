// //call the server and get information
// fetch('/getuser')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })
axios.get('/geme').then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.log(err);
});
axios.get('/gemefriend').then(function (_a) {
    var data = _a.data;
    console.log(data);
})["catch"](function (err) {
    console.log(err);
});
