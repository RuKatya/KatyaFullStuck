const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(argv)

const Love = ["pizza", "food", "sleep"]
const Hate = ['work', 'styudy', 'my life']


if (argv.l) {
    console.log(Love)
}
if (argv.h) {
    console.log(Hate)
}

//need to write in terminal node class -h