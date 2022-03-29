"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const uuid_1 = require("uuid");
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
const port = 5454;
const cards = [
    { id: uuid_1.v4(), similarNum: 1, img: "./img/1.jpg" },
    { id: uuid_1.v4(), similarNum: 2, img: "./img/2.jpg" },
    { id: uuid_1.v4(), similarNum: 3, img: "./img/3.jpg" },
    { id: uuid_1.v4(), similarNum: 4, img: "./img/4.jpg" },
    { id: uuid_1.v4(), similarNum: 5, img: "./img/5.jpg" },
    { id: uuid_1.v4(), similarNum: 6, img: "./img/6.jpg" },
];
function shuffleCards(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}
function randomInteger() {
    return Math.round(Math.random() * 5);
}
app.post('/get-data', (req, res) => {
    const { numCards } = req.body;
    let renderNum1 = randomInteger(), renderNum2 = randomInteger(), renderNum3, renderNum4, newCardsArr = [], doubleCardsArr = [], cardArrForClient;
    switch (numCards) {
        case 4:
            // renderNum2 = randomInteger()
            while (renderNum1 === renderNum2) {
                renderNum2 = randomInteger();
            }
            newCardsArr.push(cards[renderNum1], cards[renderNum2]);
            console.log(newCardsArr);
            for (let i = 0; i < newCardsArr.length; i++) {
                for (let j = 0; j < newCardsArr.length; j++) {
                    doubleCardsArr.push(newCardsArr[j]);
                }
            }
            cardArrForClient = shuffleCards(doubleCardsArr);
            console.log(cardArrForClient);
            res.status(200).send(cardArrForClient);
            break;
        case 8:
            renderNum2 = randomInteger();
            renderNum3 = randomInteger();
            renderNum4 = randomInteger();
            while (renderNum1 === renderNum4 || renderNum2 === renderNum4 || renderNum3 === renderNum4 || renderNum1 === renderNum3 || renderNum2 === renderNum3 || renderNum1 === renderNum2) {
                renderNum2 = randomInteger();
                renderNum3 = randomInteger();
                renderNum4 = randomInteger();
            }
            newCardsArr.push(cards[renderNum1], cards[renderNum2], cards[renderNum3], cards[renderNum4]);
            for (let i = 0; i < newCardsArr.length / 2; i++) {
                for (let j = 0; j < newCardsArr.length; j++) {
                    doubleCardsArr.push(newCardsArr[j]);
                }
            }
            cardArrForClient = shuffleCards(doubleCardsArr);
            console.log(cardArrForClient);
            res.status(200).send(cardArrForClient);
            break;
        case 12:
            for (let i = 0; i < cards.length / 4; i++) {
                for (let j = 0; j < cards.length; j++) {
                    doubleCardsArr.push(cards[j]);
                }
            }
            cardArrForClient = shuffleCards(doubleCardsArr);
            console.log(cardArrForClient);
            res.status(200).send(cardArrForClient);
            console.log(newCardsArr);
            res.status(200).send(newCardsArr);
            break;
        default: console.log('No Enter number');
    }
});
app.get('/check', (req, res) => {
    try {
        const { openFirst } = req.query;
        const { openSecond } = req.query;
        if (openFirst && openSecond) {
            console.log(`the first number is ${openFirst} and second ${openSecond}`);
            console.log(openFirst);
            console.log(openSecond);
            if (openFirst === openSecond) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        }
    }
    catch (error) {
    }
});
app.listen(port, () => {
    console.log(`Server listen on port http://localhost:${port}`);
});
