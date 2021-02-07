//IF...ELSE IF..ELSE
console.log('IF...ELSE IF..ELSE')
let x = 5,
    y = 3;
if (x > y) {
    console.log('x bigger than y')
} else if (x === y) {
    console.log('x are y')
} else if (x < y) {
    console.log('x smaller than y')
} else {
    console.log('how are you?')
}

//SWITCH
console.log('SWITCH')
switch ("+") {
    case '+':
        console.log('add'); //ללא תוספת של בריאק אחרי הקונסול לוג, יופיעו לנו בקונסול כל הנתונים
        break;
    case '-':
        console.log('minus');
        break;
    case '/':
        console.log('divide');
        break;
    case '*':
        console.log('multiple');
        break;
    default: //המידה ולא מוצא את אחד הקיסים בדיפולט יש תשובה
        console.log('couldnt find the symbol')
}

//CLASSWORK
console.log('CLASSWORK')
const drinks = [{ name: 'cola', taste: 'good' }, { name: 'sprite', taste: 'beautiful' }, { name: 'fanta', taste: 'bad' }]

switch (drinks[0].taste) { //אם להכניס כמה משקעות יתן את האחרון שרשום
    case 'good':
        console.log('Cola is live');
        break;
    case 'beautiful':
        console.log('Live is better');
        break;
    case 'bad':
        console.log('I hate it!');
        break;
    default:
        console.log('Dont metter')
}

//DAYS TODAY
console.log('DAYS TODAY')

const date = new Date();
const day = date.getDay();
console.log(day);

switch (day) {
    case 0:
        console.log('today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday')
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    default:
        console.log('Time does not exist')
}