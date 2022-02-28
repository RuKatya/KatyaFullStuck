// alert('BlaBlaBla') //for check

//------------------how to get from the client------------

// fetch('/get-random-number')
//     .then(response => response.json()) //crude response - גולמי - необработаный
//     .then(data => {
//         console.log(data)
//     })

//-------------------how to sent to the client --------------

function getNumber() {
    fetch('/get-random-number')
        .then(response => response.json())
        .then(data => {
            document.getElementById('root').innerHTML = data.number
        })
}