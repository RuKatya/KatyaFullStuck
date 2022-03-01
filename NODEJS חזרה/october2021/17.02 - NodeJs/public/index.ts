// //call the server and get information
// fetch('/getuser')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })

axios.get('/geme').then(({ data }) => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

axios.get('/gemefriend').then(({ data }) => {
    console.log(data)
}).catch(err => {
    console.log(err)
})