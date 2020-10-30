//1
function vatRegular(price) {
    return price * 0.17
}

const priceR = 100
let priceRegular = vatRegular(priceR)
console.log(priceRegular)

function priceCandleFive() {
    document.getElementById('textChangeFive').innerHTML = 'The price is ' + priceR
    document.getElementById('textChangeFive').style.color = 'green';
}

function vatCandleFive() {
    document.getElementById('textChangeVatFive').innerHTML = 'The vat is ' + priceRegular
    document.getElementById('textChangeVatFive').style.color = 'red';
}


//2
const vatAnonymous = function (price) {
    return price * 0.17
}
priceAn = 165
let PriceAnonymous = vatAnonymous(priceAn)
console.log(PriceAnonymous)

function priceCandleThree() {
    document.getElementById('textChangeThree').innerHTML = 'The price is ' + priceAn
    document.getElementById('textChangeThree').style.color = 'green';
}

function vatCandleThree() {
    document.getElementById('textChangeVatThree').innerHTML = 'The vat is ' + PriceAnonymous
    document.getElementById('textChangeVatThree').style.color = 'red';
}


//3
const vatArrow = (price) => {
    return price * 0.17
}
priceAr = 250
let priceArrow = vatArrow(priceAr)
console.log(priceArrow)

function priceCandleRGB() {
    document.getElementById('textChangeRGB').innerHTML = 'The price is ' + priceAr
    document.getElementById('textChangeRGB').style.color = 'green';
}

function vatCandleRGB() {
    document.getElementById('textChangeVatRGB').innerHTML = 'The vat is ' + priceArrow
    document.getElementById('textChangeVatRGB').style.color = 'red';
}



//SHOPPING BASKET
let cart = {
    'five123' : {"name": "five", "count":3},
    'three123' : {"name": "three", "count":3},
    'RGB123' : {"name": "RGB", "count":3}
};

document.onclick = event => {
    // console.log(event.target.classList); //נותן לראות את הקלאסים שיש בעמוד
    if (event.target.classList.contains('plus')) {  //ניתן למצוא דרכו קלאס שאנחנו צריכים
        plusFunction(event.target.dataset.id);
    }
    if (event.target.classList.contains('minus')) {  //ניתן למצוא דרכו קלאס שאנחנו צריכים
        minusFunction(event.target.dataset.id);
    }
}

//plus items
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}


//minus items
const minusFunction = id => {
    if (cart[id]['count']-1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]['count'] --;
    renderCart();
}

//delet items
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}

const renderCart = () => {
    console.log(cart);
}

renderCart();

function cartAll() {
}