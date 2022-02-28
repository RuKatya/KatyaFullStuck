var root = document.querySelector('.root');
var root2 = document.querySelector('.root2');
var inputSearch = document.querySelector('#search');
var searchMovie = document.querySelector('#searchMovie');
inputSearch.addEventListener('keyup', function (e) {
    var text = "fngweo;rg sbsdgfb dfgegrg qweqwe fghnfghn";
    var inputValue = e.target.value;
    console.log(inputValue);
    var regex = new RegExp(inputValue, 'gi');
    if (text.match(regex)) {
        root.innerHTML = "found " + inputValue;
    }
    else {
        root.innerHTML = "not found " + inputValue;
    }
});
var movie = [
    { name: "The Shawshank Redemption", year: 1994 },
    { name: "The Godfather", year: 1972 },
    { name: "The Godfather: Part II", year: 1974 },
    { name: "The Dark Knight", year: 2008 },
    { name: "12 Angry", year: 2012 },
    { name: "Schindler's List", year: 1993 },
    { name: "Pulp Fiction", year: 1994 },
    { name: "The Lord of the Rings: The Return of the King", year: 2003 },
];
searchMovie.addEventListener('keyup', function (e) {
    if (e.target.value.length > 0) {
        var inputValue = e.target.value;
        var regex_1 = new RegExp(inputValue, 'gi');
        var result = movie.filter(function (movie) { return movie.name.match(regex_1); });
        root2.innerHTML = "<ul>" + result.map(function (movie) { return "<li>" + movie.name + "</li>"; }).join('') + "</ul>";
    }
    else {
        root2.innerHTML = '';
    }
});
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
