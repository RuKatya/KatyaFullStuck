// alert('check yopta') //for check

function handleSendText(e) {

    e.preventDefault()

    let username = e.target.children.username.value;


    fetch('/get-cookie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username })
        }).then(res => res.json())
        .then(data => {
            console.log(data.cookie)
        })
}