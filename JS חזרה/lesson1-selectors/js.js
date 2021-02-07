//FIRST PART
//primitive variabels
var city = 'Ramat Gan' // הכרזה ישנה של משתנים דומה ללט
let name = 'Katya' //משתנה שניתן לשנות מאוחר יותר
    //גרשיים מסמנות אלינו שהמשתנה הוא שרשרת טקסט - STRING
const family = 'Ru' //משתנה שהוא קבוע ולא ניתן לשינוי
let age = 27 // בסקריפט לא מחייב לשים ; בשביל לסגור משפט

console.log(name)
console.log(family)
console.log(age)

name = 'Kakashka'
console.log(name)
console.log(family)
console.log(age)

//אם הרשום בשם משפחה של אחר הדפדפן יתן לנו שגיע ולא יוכל להריץ את הקוד

//את השם אני יוכל לשנות משם למספר, לסקריפט אין שום בעיה להשתנות
name = 23
console.log(name)

function handleClick(e) {
    const input = e.target.value
    console.log(input)
    document.getElementById('output').innerText = input
}

//SECOND PART
//primitive variabels
name = 23 //number
name = true;
name = false; //booleans
name = null //nothing, undefined in memory אין לו מקום בזיכרון
name = undefined // there is a location in memory, but no value was asign תופס מקום אבל אין ערך שהוגדר

//
let student = { name: "Tal", surename: "Yaron" } // object {key:value, key:value}
console.log(student)

console.log(student.name)
console.log(student['name'])

console.log(student.surename)
console.log(student['surename'])

//MD קבצי טקסט שגיט יודעה לקרוא

//CLASSWORK

const animal = { //object variables
    name: "dog",
    size: "25cm",
    src: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
    color: "blue",
    weight: "10kg"
}
console.log(animal)

console.log(animal.name)
console.log(animal['name'])
document.write(animal.name + '<br>')

console.log(animal.size)
console.log(animal['size'])
document.write(animal.size + '<br>')

console.log(animal.src)
console.log(animal['src'])
document.write('<img src="' + animal.src + '">' + '<br>')

console.log(animal.color)
console.log(animal['color'])
document.write(animal.color + '<br>')

console.log(animal.weight)
console.log(animal['weight'])
document.write(animal.weight + '<br>')

console.log(animal.name, animal.size, animal.src, animal.color, animal.weight)
console.log(animal['name'], animal['size'], animal['src'], animal['color'], animal['weight'])
    //ניתן לראות אתך אייל איך הוא רשם את קוד שלו בשביל להוציא לעמוד מתוך הסקריפט


let image = document.getElementById('animalPic');
const title = document.getElementById('title')
console.dir(image)
image.src = animal.src;
title.innerText = `My beloved animal is ${animal.name}`; //אפשר לשנות את השם של החייה, למשל מכלב לחתול

//array
const arr = ['Gilad', 'Ira', 'Olga', 12, true] //[elm, elm, elm]
console.log(arr)
console.log(arr[0])
console.log(arr[4])

console.log(arr[1][2]) // נותן את האלמנת השני ואת החלק השני של האלמנט

arr[4] = false;
console.log(arr)
console.log(arr[4])

arr[5] = 1;
console.log(arr)

arr.push('') //push = להוסיף

//DATE
const today = new Date()
console.log(today)
console.log(today.getFullYear())
console.log(today.getDay())
console.log(today.getTime())

const days = ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת']
console.log(`היום יום ${days[today.getDay()]}`);
document.write(`היום יום ${days[today.getDay()]}`)


//CLASSWORK
const family1 = ['ka', 'ma', 'kos']
const familyName = document.getElementById("familyName")
familyName.innerText = `From oldest to youngest: ${family1[1] + ", " + family1[2] + ", " + family1[0]}`;