let body = document.body
body.style.background = 'cyan';
//ניתן כמו כן לרשום 
// document.body.style.background = 'blue'

//----------------------------------------------------------//

// let ps = document.getElementsByTagName('p') //שיטה ישנה לתפוס תגיות
// console.dir(ps)

//-----------------------------------------------------------//

let ps2 = document.querySelectorAll('p') //מדפיס את כל הפיסקאות שיש 
console.log(ps2)

let p1 = document.querySelector('p') //תופס רק את הפיסקה הראשונה מכל הפיסקאות שקיימות, אך לא נותן את המידע על הפיסקה הזאת, בעקבות כך מחליפים לוג לדיר
console.log(p1)
console.dir(p1)

ps2.forEach(p => { //תופס את כולם ומגדיר לכל אחד שינוי
    p.style.color = 'mint'
})

ps2[1].style.fontSize = '1.5rem' // תופס רק אחד ומשנה רק לו את הההגדרות
ps2[0].style.background = 'darkcyan'

//-------------------------------------------------------------//

let input1 = document.querySelector('input[name=name]')
input1.value = 'gotcha!!'
let input2 = document.querySelectorAll('input[type=text]')
input2.forEach(input => {
    input.value = 'GORCHA!!'
})

input2[1].style.padding = '1.5em'

console.dir(input1)
console.dir(input2)

let input3 = document.querySelectorAll('[data-id="2"]')
input3.forEach(input => {
    input.value = 'HAHA'
})