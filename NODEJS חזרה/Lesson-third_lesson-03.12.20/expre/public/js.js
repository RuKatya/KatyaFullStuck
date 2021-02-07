// alert('WHAT WHAT') //for check if work

// setTimeout(()=>{
// },4000) //can put time after him the application will work

// setInterval(()=> {
// },5000) //each how many time it refresh

// setTimeout(() => {
fetch('/get-number-of-dogs') //fetch-לתפוס, להביא     //then=>after you doing 1 do 2... 
    .then(response => response.json()) //response - תגובה
    .then(data => { //תתן דאטה של ...
        document.getElementById('root').innerHTML = `I have ${data.numberOfDogs} dogs` //print data of number of dogs
    })
    // }, 5000 )