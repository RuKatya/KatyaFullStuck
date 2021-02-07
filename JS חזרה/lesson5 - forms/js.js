//SIMPLE FORM EVENTS
const theDiv = document.querySelector('#theDiv')

function handleInput(e) {
    // console.log(e)
    // console.log(e.target.value)

    const x = e.target.value
    theDiv.innerHTML = x
}
// -------------------------------------------------------//
const theDiv__second = document.querySelector('#theDiv__second')

function handleOnKeyUp(e) {
    // console.log(e)
    console.log(e.key)


    const x = e.target.value
    theDiv__second.innerHTML = x
    e.stopPropagation() //עוצר את הכפילויות בעת כתחבה באינפוט
}

//-----------------------------------------------------------//

document.addEventListener('keyup', handleKeyBoard)

function handleKeyBoard(e) {
    console.log(e.key)
}

//-----------------------------------------------------------//

//ADVANCE FORM EVENTS
//------------first-----------------//
function handleSubmit(e) {
    e.preventDefault() //משתמשים בשביל שעמוד לא יתרענן - משתמשים רק בסבמיט

    console.log(e)

    const username = e.target[0].value //הנתונים של הערך הראשון
    const password = e.target[1].value //הנתננים של הערך השני

    console.log(username, password) //לאות את הערכים בקונסול

    const theAnswer = document.querySelector('#theAnswer')
    let k = `the password is: ${ password } the username is: ${ username }`

    theAnswer.innerHTML = k
}


//--------------second-------------------//
function handleSubmit__second(e) {
    e.preventDefault()

    console.log(e)

    const username = e.target.username.value //הנתונים של הערך הראשון
    const password = e.target.password.value //הנתננים של הערך השני
        //את הנתונים ניתן לראות בתוך הקונסול, טרגט, צ'ילדרן

    console.log(username, password) //לאות את הערכים בקונסול

    const theAnswer__second = document.querySelector('#theAnswer__second')
    let q = `the password is: ${ password } the username is: ${ username }`

    theAnswer__second.innerHTML = q
}