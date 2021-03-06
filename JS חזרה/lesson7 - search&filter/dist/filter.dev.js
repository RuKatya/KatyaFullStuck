"use strict";

//--------------------------bigger that X (obj>x)----------------//
console.log('OBJ > X');
var books = [{
  title: 'book2',
  year: 2010
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}];
var newBooks = books.filter(function (book) {
  return book.year > 1990;
}); //צריך לעשות משתנה חדש שעליו נמשוך  את הנתונים

console.log(newBooks); //------------------filter & sort by title----------------------//

console.log('FILTER & SORT by title');
var books2 = [{
  title: 'book2',
  year: 2010
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}, {
  title: 'book5',
  year: 1970
}, {
  title: 'book6',
  year: 2002
}];
var newBooks2 = books2.filter(function (book) {
  return book.year > 1990;
}).sort(function (a, b) {
  if (a.title < b.title) return -1;
});
console.log(newBooks2); //------------------filer & sort by year----------------//

console.log('FILTER & SORT by year');
var books3 = [{
  title: 'book2',
  year: 2010
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}, {
  title: 'book5',
  year: 1970
}, {
  title: 'book6',
  year: 2002
}];
var newBooks3 = books3.filter(function (book) {
  return book.year > 1990;
}).sort(function (a, b) {
  return a.year - b.year;
});
console.log(newBooks3); //----------------------------------------------//

console.log('');
var books4 = [[{
  title: 'book2',
  year: 2010
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}, {
  title: 'book5',
  year: 1970
}, {
  title: 'book6',
  year: 2002
}], [{
  title: 'book2',
  year: 2010
}, {
  title: 'book3',
  year: 1990
}, {
  title: 'book1',
  year: 1970
}, {
  title: 'book4',
  year: 2000
}, {
  title: 'book5',
  year: 1970
}, {
  title: 'book6',
  year: 2002
}]];
var newBooks4 = books4[0].filter(function (book) {
  return book.year > 1990;
}).sort(function (a, b) {
  return a.year - b.year;
}); //נכנס לאיריי שאנחנו צריכים

console.log(newBooks4);