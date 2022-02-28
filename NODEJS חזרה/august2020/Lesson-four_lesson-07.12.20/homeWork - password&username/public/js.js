// alert('check yopta') //for check

function handleSendText(e) {

    e.preventDefault()

    let usernameCheck = e.target.children.username.value;
    let passwordCheck = e.target.children.password.value;
    // let account = { username, password };

    fetch('/check-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ usernameCheck, passwordCheck })
        }).then(res => res.json())
        .then(data => {
            if (data.ok == true) {
                document.getElementById('root').innerHTML = `<h2>I glad for you, your username is ${usernameCheck} and password ${passwordCheck}, please don't forget it!</h2>`;
                document.body.style.backgroundColor = 'green';
            } else {
                document.body.style.backgroundColor = 'red'
                document.getElementById('root').innerHTML = `<h2>NOT THIS TIME BEACH!</h2>`
            }
        })
}


// console.log(data)

//             document.getElementById('root').innerHTML = `<h2>I glad for you, your username is ${data.user} and password ${data.pass}, please don't forget it!</h2>`;
//             // document.getElementById('root2').innerHTML = data.pass