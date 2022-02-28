// alert('checkcheck') //for check



function hendleOnSubmit(e) {
    e.preventDefault();

    const username = e.target.children.username.value
    const password = e.target.children.password.value

    fetch('/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        }).then(r => r.json())
        .then(data => {
            if (data.ok) {

            }
        })
}

function handleAdmin() {

    fetch('/admin-panel')
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
}