//EVENTS!!!EVENT!!!
console.log('EVENTS!!!EVENT!!!')

// const theDiv = document.getElementById('theDiv') //תופס את הדיב באידי שלו
const theDiv = document.querySelector('#theDiv') //יכול לתפוס את הדיב עם שם שנתנו לו, גם אם זה קלאס וגם עם זה אידי. צריך להעתיק את השם עם ההתחלה הנכונה
    // const theDiv = document.querySelectorAll('.theDiv') //יתפוס את כל הקלאסים שהם באותו השם - את כל המערך. במידה לא יהיה רשום אלל(הכל), היה נתפס רק הדיב הראשון עם השם הרשום

theDiv.addEventListener('click', event => { //מוציא את כל המידע האפשרי על הדיב שעשינו
    console.log(event)
})


theDiv.addEventListener('click', event => {
    event.target.style.transform = 'rotate(20deg)'
})


theDiv.addEventListener('mouseleave', event => {
    event.target.style.transform = 'rotate(0deg)'
})

function handleOnContexyMenu(event) {
    event.target.style.transform = 'scale(2) rotate(-20deg)' //scale גדל האובייקט rotate מסובב את האובייקא
}

// theDiv.addEventListener('mouseover', handleOnMouseOver) //מכובה כי הפונקציה של להזיז את הדיב לא תתפס

//RANDOM MOVE!!---------------------------------------
function handleOnMouseOver(event) {
    console.dir(event.target) //אם כותבים לוג במקום בדיר, בקונסול יצא לנו הפרטים ה"יבשים" של הדיב. יצא לנו הפרטים שיש באיצ'-טי-אמ-אלץ. דיר מאפשר לנו לחקור לעומק יותר פרטים על הדיב, למשל איפה הוא נמצא כרגע

    const left = event.target.offsetLeft
    const top = event.target.offsetTop

    console.log(left, top)

    // event.target.style.left = `${left+100}px` //במידה ואנחנו רוצים להזיז את הדיב ימינה
    event.target.style.left = `${left+randomMove(10)}px`
    event.target.style.top = `${top+randomMove(10)}px`

    // let text = event.target.textContent // אם נמצא פה כל שינוי ייכתב אחד אחרי השני

    event.target.innerText = `Click me! x: ${left}px, y:${top}px` // מוחקים את $טקסט ומוסיפים טקסט רגיל
}

// function randomMove() { //יזוז רדנומאלי בתווך של -20 עד +20
//     return (Math.random() * 40) - 20 //נותן מספר רנדומלי בין 0(כולל) עד 1(כולל), מספר עשרונים
// }


function randomMove(moveInEachStep) { // הדיב יזוז בתווך מספרים שנגדיר לו
    return (Math.random() * moveInEachStep * 2) - 0.5 * moveInEachStep;
}





//------------------------------------------------------------//
//DRAG


let x = 0,
    y = 0;
let deltaX;
let deltaY;


theDiv.addEventListener('dragstart', event => {
    // console.log(event)
    x = event.target.offsetLeft;
    y = event.target.offsetTop;
    let mouseX = event.x,
        mouseY = event.y;
    deltaX = mouseX - x;
    deltaY = mouseY - y;

    console.log(x, y, '---', mouseX, mouseY, 'deltaX:', deltaX, deltaY)
})

theDiv.addEventListener('drag', event => {
    // console.log(event)
    // console.log(event.x, event.y)
    event.target.style.display = 'none'

    event.target.style.left = `${event.x-deltaX}px` //עובד גם בלי האבאנט
    event.target.style.top = `${event.y-deltaY}px`
})

theDiv.addEventListener('dragend', event => {
    // console.log(event)
    // console.log(event.x, event.y)

    event.target.style.display = 'block'

    event.target.style.left = `${event.x-deltaX}px`
    event.target.style.top = `${event.y-deltaY}px`
})





















//-------------------------------------------------------------//

//CLASSWORK
console.log('CLASSWORK')

const idDiv = document.querySelector('#idDiv');

idDiv.addEventListener('click', event => {
    event.target.style.transform = 'translate(300px,0)'
})

function handleOnDblClick(event) {
    event.target.style.transform = 'translate(0,0)'

}

//----------------------------------------------------------------//

// MATH.RANDOM
document.write('MATH.RANDOM')
    // document.write(Math.random())
    // document.write(Math.floor(Math.random() * 10)) // מחזיר מספרים שלמים רנדומליים מ0 עד 9, ניתן לשנות את המכפלה ואז המספר שעד הוא יתן ישתנה
    // document.write(Math.floor(Math.random() * 10) + 1) //יתן מספרים שלמים רנדומליים מ0 עד 10
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRndInteger(0, 10)) // מחזיר מספרים רנדומליים בין 0 ל9 כולל

function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const j = '<br>' + 'getRndInteger2(1, 10) = ' + getRndInteger2(1, 10) + '<br>' + '<br>'
document.write(j) //מחזיר מספרים רנדומליים מ1 עד 10 כולל


//----------------------------------------------------------------//
//MATH.ROUND
document.write('MATH.ROUND') //מעגל את המספרים למספר הקרוב היותר ממספר עשרוני
const a = Math.round(2.6)
const b = Math.round(2.2)
const c = Math.round(1.1)
const d = Math.round(3.4)
const e = Math.round(8.8)

const k = '<br>' + 'Math.round(2.6) = ' + a + '<br>' + 'Math.round(2.2) = ' + b + '<br>' + 'Math.round(1.1) = ' + c + '<br>' + 'Math.round(3.4) = ' + d + '<br>' + 'Math.round(8.8) = ' + e
document.write(k)