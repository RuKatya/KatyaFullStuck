//create a node program that either add number or ,
//multpty numbres, that are sent trought the cli (terminal)

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv)

let x = 0
let y = 0

if (argv.x) {
    x = argv.x
}

if (argv.y) {
    y = argv.y
}

console.log(x + y)