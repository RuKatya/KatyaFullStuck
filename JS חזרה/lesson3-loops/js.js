//FOR LOOP
console.log('FOR LOOP')
console.log('First exmple') //First exmple
for (let i = 0; i < 9; i++) { //will happen 9 times
    console.log(i)
}

console.log('second exmple') //second exmple
for (let i = 0; i < 20; i = i + 5) {
    console.log(i)
}

console.log('third exmple') //third exmple
for (let i = 3; i < 9; i++) {
    console.log(i)
}

//WHILE LOOP
console.log('WHILE LOOP')

let i = 0

while (i < 10) {
    console.log(i);
    i++
}

//LOOPS FOR OBJECTS AND ARRAYS
console.log('LOOPS FOR OBJECTS AND ARRAYS')
    //ARRAYS
console.log('ARRAYS')
let numbers = [3, 6, 8, 97, 326, 8856, 3, 2, 245];

//forEach
console.log('forEach')
numbers.forEach(elm => { //callback fuction -  מראה את כל האלמנטים שיש בתוך האריי
    console.log(elm)
})

//map
console.log('map')
numbers.map((elm, index) => { //מראה את המיקום של האלמנט בתוך האריי
    console.log(index, ':', elm)
})

//let in
console.log('let in')
for (let i in numbers) { //דומה למאפ
    console.log(`${i}: ${numbers[i]}`)
}

//let of
console.log('let of')
for (let i of numbers) { //דומה לפור איצ'
    console.log(i)
}

//CLASSWORK
console.log('CLASSWORK')
console.log('for') //for
for (let z = 0; z < 5; z++) {
    console.log(z)
}

console.log('while') //while
let x = 0;
while (x < 5) {
    console.log(x)
    x++;
}

console.log('ARRAY') //array

let movie = ['mam', 'dad', 'movie', 'tv', 'serials', 'huina'];

console.log('FOR EACH') //FOR EACH
movie.forEach(films => {
    console.log(films)
})

console.log('MAP') //MAP
movie.map((films, index) => {
    console.log(index, ':', films)
})

//OBJECTS
console.log('OBJECTS')

let obj = { a: 1, b: 2, c: 3, d: 4 }

console.log('let in') //let in
for (let i in obj) {
    console.log(`${i}:${obj[i]}`)
}

//WRITE TO DOM
console.log('WRITE TO DOM')

const root = document.getElementById('root')

root.innerHTML = `<p>kosta kakashka moya</p>`

// let html = `<p>Privet</p>`;
// html += `<p>bla bla bla</p>`

// root.innerHTML = html //ניתן להשכיל נתונים לתוך דיב 

// document.body.innerHTML = html //וכמו כן ניתן להכניס את הנתונים לתוך באדי

//CLASSWORK
console.log('CLASSWORK')

const myFood = ['shnizel', 'pizza', 'hamburger', 'else']

let html = ''
const food = document.getElementById('food')

food.innerHTML = myFood

myFood.forEach(foodMember => {
    html += `<p>${foodMember}</p>`
})

food.innerHTML = html

//CONDITION
console.log('CONDITION')

let h = 2,
    k = 5
if (h == k) {
    console.log(`${h} is bigger than ${k}`)
} else {
    console.log(`${k} bigger than ${h}`)
}

let d = 'good',
    j = 'good'

if (d == j) {
    console.log(`${d} egual to ${j}`)
}

// = присваивоние
//== שווה למשהו
//!== לא שווה
//=== השווה בין סוג נתונים

h = 5,
    k = '5'
if (h == k) {
    console.log(`${h} yes ${k}`)
} else {
    console.log(`${k} no ${h}`)
}

h = 5,
    k = '5'
if (h === k) {
    console.log(`${h} yes ${k}`)
} else {
    console.log(`${k} no ${h}`)
}