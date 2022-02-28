const root = document.querySelector('.root');
const root2 = document.querySelector('.root2');
const inputSearch = document.querySelector('#search');
const searchMovie = document.querySelector('#searchMovie');

inputSearch.addEventListener('keyup', (e) => {
    const text = "fngweo;rg sbsdgfb dfgegrg qweqwe fghnfghn"
    const inputValue = e.target.value;
    console.log(inputValue)
    const regex = new RegExp(inputValue, 'gi');

    if (text.match(regex)) {
        root.innerHTML = `found ${inputValue}`
    } else {
        root.innerHTML = `not found ${inputValue}`
    }
})

const movie = [
    { name: "The Shawshank Redemption", year: 1994 },
    { name: "The Godfather", year: 1972 },
    { name: "The Godfather: Part II", year: 1974 },
    { name: "The Dark Knight", year: 2008 },
    { name: "12 Angry", year: 2012 },
    { name: "Schindler's List", year: 1993 },
    { name: "Pulp Fiction", year: 1994 },
    { name: "The Lord of the Rings: The Return of the King", year: 2003 },
]

searchMovie.addEventListener('keyup', (e) => {
    if (e.target.value.length > 0) {
        const inputValue = e.target.value;
        const regex = new RegExp(inputValue, 'gi');
        const result = movie.filter(movie => movie.name.match(regex))
        root2.innerHTML = `<ul>${result.map(movie => `<li>${movie.name}</li>`).join('')}</ul>`
    } else {
        root2.innerHTML = ''
    }

})


//comming from user
// const search = 'js'

// const regexAE = /Ae/i;
// const regexAE2: RegExp = new RegExp(search, 'i');

// // console.log(regexAE2)
// console.log(regexAE)

// const string: string = "ergergerergvfdfv js dfgergr ae fafbv"

// if (regexAE.test(string)) {
//     root.innerHTML = 'found'
//     console.log(`found "${search}" in ${string}`)
// } else {
//     root.innerHTML = 'not found'
//     console.log('not found')
// }

// if (string.match(regexAE2)) {
//     root2.innerHTML = 'found'
//     console.log(`found "${search}" in ${string}`)
// } else {
//     root2.innerHTML = 'not found'
//     console.log('not found')
// }

