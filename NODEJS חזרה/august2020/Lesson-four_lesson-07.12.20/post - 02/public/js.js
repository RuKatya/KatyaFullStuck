// alert('work work') //for check

function handleSendText(e) {
    let value = e.target.value;

    fetch('/send-text', {
            method: 'POST', //שליחה
            headers: {
                'Content-Type': 'application/json' //מעביר לשרת איזה מידע הוא הולך לקבל
            },
            body: JSON.stringify({ value })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('root').innerHTML = data.body
        })


    // console.log(value) //for check if work
}




// function getNumber() {
//     fetch('/get-random-number')
//         .then(response => response.json())
//         .then(data => {
//             document.getElementById('root').innerHTML = data.number
//         })
// }