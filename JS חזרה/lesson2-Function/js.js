//BY REFERENCE - all objects and arrays
console.log('BY REFERENCE')
const obj1 = { a: 1, b: 2 }
const obj2 = obj1;
console.log(obj1)
console.log(obj2)

obj1.a = 42

console.log(obj1)
console.log(obj2)

//BY VALUE - all primitives
console.log('BY VALUE')
let a = 1;
let b = a;
a = 42
console.log(a)
console.log(b)

//FUNCTION 
console.log('FUNCTION')
    //decloration
function multi(arg1, arg2) { //code block
    return arg1 * arg2
}
//הקיימות פונקציות בלי ראטורן. אך תמיד מומלץ שהפונקציה תחזיר משהו.
//אם רושמים קוסול.לוג (למשל) אחרי הראטורן אנחנו לא נראה את מה שרשמנו בקונסול


//invocation
let x = multi(2, 6)
console.log(x)

x = multi(120, 456)
console.log(x)


//SCOPE
console.log('SCOPE')
let c = 100;
let k = 200

function sum(c, d) {
    console.log(c) //הפונקציה מכירה את המשתנה
    k = 50 // אם המשתנה שונה בתוך הפונקציה הגלובל ישתנה גם
    console.log(k)
    return c + d //scope
    console.log(c) // כאן הפונקציה לא תכיר את המשתנה
}

let z = sum(16, 10)
console.log(z)
console.log(c) //- כאן הדפדפן יתן שגיא, לא הוגדר משתנה לפני

//DIFFRENT BITWEEN VAR AND LET
console.log('DIFFRENT BITWEEN VAR AND LET')
if (x > 20) {
    var d = 34; //ואר נותן לקבל את המשתנה מתוך הפונקציה למחוצה לה, אם נשנה את הואר ללט הדפדפן יתן שגיא
}

console.log('d:', d)

//NEXT
console.log('NEXT')
let y = 0 //global variable - משתנה מחוץ לפונקציה

function addByOne(arg1) {
    y = y + arg1
}

addByOne(3)
console.log(y)

addByOne(30)
console.log(y)

y = 10
addByOne(3)
console.log(y)

addByOne(30)
console.log(y)

//WORKCLASS
console.log('WORKCLASS')

function age(year, birth) {
    return year - birth;
}

x = age(2020, 1993);
console.log(x)

function name(firstName, secondName) {
    return { firstName, secondName }
}

f = name('Katya', 'Ru');
console.log(f)

//WAYS TO WRITE FUNCTION
console.log('WAYS TO WRITE FUNCTION')

function multi(a, b) { //regular function
    return a * b;
}

const mlti2 = function() { //anonymous function
    return a * b;
}

const multi2 = (a, b) => { //arrow function
    return a * b;
}

console.log(multi2) //מדפיס את הפונקציה כולה

let multi3 = multi2;
let h = multi3(10, 4)
console.log(h)