const cards: HTMLDivElement = document.querySelector('.cards')
const chooseLevelOfGame: HTMLDivElement = document.querySelector('.chooseLevelOfGame')
const gameInfo__time: HTMLDivElement = document.querySelector('.gameInfo__time')
const gameInfo__score: HTMLDivElement = document.querySelector('.gameInfo__score')
let openCard = []
let numOfRigthCards = 0;

function timer(): void {
    let seconds = 0;
    let minutes = 0
    let time = setInterval(() => {
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

async function hendleNumbersOfCards(numCards) {
    console.log(numCards)
    const { data } = await axios.post('/get-data', { numCards })

    console.log(data)

    let html = ''

    html += data.map(d => {
        return `
        <div class="flipper" >
            <div class="back"></div>
            <div class="front">
                <img src="${d.img}" alt="${d.similarNum}" id="${d.similarNum}"/>
            </div>
        </div>
        `
    }).join('')

    chooseLevelOfGame.style.display = "none"
    timer()
    cards.innerHTML = html

    // gameInfo__score.innerHTML = numOfRigthCards

}

cards.addEventListener('click', (e) => {

    if (e.target.nodeName === "IMG") { //check if we have the rigth nodename
        console.log(`the id is ${e.target.id}`) //what id we get

        if (openCard.length === 0 || openCard.length === 1) { //if we have length 0 or 1 add to arr
            openCard.push(e.target)//add the id of img

            swiftCard()
        }

        console.log(openCard.length)

        function swiftCard() {

            console.log(openCard)
            if (openCard.length == 2) {
                async function checkOpenedCards(openedCard) {
                    const { data } = await axios.get(`/check?openFirst=${openedCard[0]}&openSecond=${openedCard[1]}`)

                    console.log(data)

                    if (data === true) {
                        console.log(`they are the same`)
                        console.log(e.target)
                        // openedCard[0].style.display = "none"
                        // openedCard[1].style.display = "none"

                        numOfRigthCards++
                    } else {
                        console.log(`they are diffrent`)
                    }
                }

                checkOpenedCards(openCard)

                openCard = []
            }
        }
    }
})