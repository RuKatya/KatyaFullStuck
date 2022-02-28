//-----------------------For example---------------------------------
// console.log('Hi there!') //we always can write something in terminal

// let x = 27;

// console.log(`I am ${x} years old`)

// function yearsOld(year, birth) {
//     return year - birth;
// }

// let y = yearsOld(2020, 1993);

// console.log(y)
//---------------------------------------------------------
//For using package we need to use npm, for example: npm init --y npm i express
//if we want to using packages we can write npm init -> Enter - example write in terminal

/*
package name: (nodejs-first_lesson)
version: (1.0.0)
description: first lessson
entry point: (index.js)
test command:
git repository:
keywords:
author: Katya
license: (ISC)
*/

//else we can write npm init --y -> Enter - and this package will creating auto - example in terminal

//we need packages for using diffrent function and else that we have in node or we can download it from other space

//The first package we will use is -> dayjs : https://www.npmjs.com/package/dayjs

//We can find them in the site off npm https://www.npmjs.com/

//for using it we write in terminal: npm i dayjs

//after we paste the terminal the line we will see node_modules in the folder
//--------------Dayjs----------
//for installing: npm i dayjs
const dayjs = require('dayjs'); //for using the package -- give me the package - לדרוש // Taking the line from documentation


// let x = dayjs().add(1, 'year'); //adding for today 1 year -- we can add all years that we need, like:
// let x = dayjs().add(5, 'year') //also we can add in whitch format we can see it, like:
// let x = dayjs().add(5, 'year').format('DD/MM/YYYY') //so we can use the date we want:
// let x = dayjs('5-5-1982').add(5, 'year').format('DD/MM/YYYY')
// console.log(`the day today is ${x}`)

//-----------yargs--------------
//for installing: npm i yargs
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv) //write in terminal node index(name of file) --y: it will give us: { _: [], y: true, '$0': 'index' } -> y is true
    //also we can add --x --r --f and it will give us all the letters is true
    //--------example--------
    // if (argv.y) {
    //     console.log('You wrote y') //if i have --y in termina we will see 'you wrote y'
    // }
    // if (argv.x) {
    //     console.log('You wrote x') //if i have --y in termina we will see 'you wrote x'
    // }

//-----------example-2--------------
let d = 1,
    m = 1,
    y = 2000,
    a = 0

if (argv.y) {
    y = argv.y
}

if (argv.m) {
    m = argv.m
}

if (argv.d) {
    d = argv.d
}

if (argv.a) {
    a = argv.a
}

// // let z = dayjs(`${m}-${d}-${y}`).add(1, 'year').format('DD/MM/YYYY')

// // console.log(`${z}`) //in terminal we write: node index --d='26' --m='11' --y='2020' and we will get:
// // { _: [], d: 26, m: 11, y: 2020, '$0': 'index' }
// //26/11/2025

if (argv.a) {
    a = argv.a
}

// //or also we can add years to the now day
let z = dayjs(`${m}-${d}-${y}`).add(a, 'year').format('DD/MM/YYYY') //node index --d='26' --m='11' --y='2020' --a='50'
    // console.log(`${z}`)

//we can add words in yargs:
// console.log(argv)
console.log(argv._) //the key of arrey //node index --y="2020" --d="2" --m="3" --a="1" sadfsdf sdfsdf.. ->
    /*_: [ 'sadfsdf', 'sdfsdf' ],
    y: 2020,
    d: 2,
    m: 3,
    a: 1,
    '$0': 'index'
    }
    [ 'sadfsdf', 'sdfsdf' ] */

if (argv._.includes('hi')) { //we can to check if some word is includes and do something if yes
    console.log('hi to you too')
}