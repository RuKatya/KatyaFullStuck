interface Card {
    similarNum: number
    img: string
}

const chooseLevelOfGame: HTMLDivElement = document.querySelector('.chooseLevelOfGame')
const cards: HTMLDivElement = document.querySelector('.cards')
const gameInfo__time: HTMLDivElement = document.querySelector('.gameInfo__time')
const gameInfo__score: HTMLDivElement = document.querySelector('.gameInfo__score')
const winner: HTMLDivElement = document.querySelector('.winner')
let dataGame: Array<Card>
let openCard: Array<HTMLImageElement> = []
let numOfRigthCards: number = 0;
let totalOpenedInGame: Array<HTMLImageElement> = []
let seconds: any = 0;
let minutes: number = 0;

async function hendleNumbersOfCards(numOfCards) {
    console.log(numOfCards)
    const { data } = await axios.post('/get-data', { numOfCards })

    dataGame = data
    console.log(dataGame)

    if (numOfCards == 4) { //change width of cards by number of cards
        cards.classList.add('four')
    } else if (numOfCards == 8) {
        cards.classList.add('eight')
    } else if (numOfCards == 12) {
        cards.classList.add('twelve')
    }

    let html = ''

    html += dataGame.map(d => {
        return `
        <div class="memory-card" id="${d.similarNum}">
            <div class="back" id="${d.similarNum}"></div>
            <div class="front" >
                <img src="${d.img}" alt="${d.similarNum}" id="${d.similarNum}" />
            </div>
        </div>
        `
    }).join('')


    cards.innerHTML = html
    timer()
    setInterval(() => {
        gameInfo__score.innerHTML = `Total: ${numOfRigthCards}`
    }, 1000)

    chooseLevelOfGame.style.display = "none"
}

cards.addEventListener('click', (e) => {
    const target = e.target as Element;
    const targetParent = e.target.offsetParent; //get parent of child
    if (target.nodeName === "DIV") { //check if we have the rigth nodename
        targetParent.classList.toggle('flip')
        console.log(`the id is ${targetParent.id}`) //what id we get

        if (openCard.length === 0 || openCard.length === 1) { //if we have length 0 or 1 add to arr
            openCard.push(<HTMLImageElement>targetParent)//add the id of card

            swiftCard()
        }
    }
})

function swiftCard() {
    console.log(openCard)
    if (openCard.length == 2) {
        async function checkOpenedCards(openedCard) {
            const { data } = await axios.get(`/check?openFirst=${openedCard[0].id}&openSecond=${openedCard[1].id}`)

            console.log(data) //get back if same or not

            if (data === true) {
                console.log(`they are the same`)
                setTimeout(() => {
                    openedCard[0].style.opacity = "0"
                    openedCard[1].style.opacity = "0"
                }, 500)
                ++numOfRigthCards //how many card is right
                totalOpenedInGame.push(openedCard[0], openedCard[1]) //push to opened arr
                console.log(`total played ${totalOpenedInGame.length}`)
                console.log(`the score is: ${numOfRigthCards}`)

                if (totalOpenedInGame.length == dataGame.length) { //check if win
                    console.log(`you win`)
                    cards.style.display = "none"

                    winner.innerHTML = `
                    <h1>You won!!!</h1>
                    <h2>Time: ${minutes}:${seconds}</h2>
                    <img src="./img/ballon.png" />
                    `

                    gameInfo__time.style.display = 'none'
                }
            } else { //if false -> rotate the card back
                setTimeout(() => {
                    openedCard[0].classList.toggle('flip')
                    openedCard[1].classList.toggle('flip')
                }, 500)

                console.log(`they are diffrent`)
            }
        }

        checkOpenedCards(openCard)
        openCard = []
    }
}

function flipCard() {
    this.classList.toggle('flip');
}

function timer(): void {
    seconds = 0;
    minutes = 0;
    setInterval(() => {
        seconds++
        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        if (seconds === 60) {
            minutes++
            seconds = 0;
        }

        gameInfo__time.innerHTML = `
            <p>Timer: ${minutes}:${seconds}</p>
        `
    }, 1000)
}


