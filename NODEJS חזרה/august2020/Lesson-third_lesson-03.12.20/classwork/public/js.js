// alert('what') //for check

setInterval(() => {
    fetch('/get-time') //fetch-לתפוס, להביא     //then=>after you doing 1 do 2... 
        .then(response => response.json()) //response - תגובה
        .then(data => { //תתן דאטה של ...
            document.getElementById('root').innerHTML = `<h1> The time is ${data.time} </h1>` //print data of number of dogs
        })
}, 1000)

setInterval(() => {
    fetch('/get-time-on-site') //fetch-לתפוס, להביא     //then=>after you doing 1 do 2... 
        .then(response => response.json()) //response - תגובה
        .then(data => { //תתן דאטה של ...
            document.getElementById('root2').innerHTML = `<h1> You are in the site ${data.timeOnTheSite} seconds </h1>` //print data of number of dogs
        })
}, 1000)