interface Card {
    similarNum: number
    img: string
}

const chooseLevelOfGame: HTMLDivElement = document.querySelector('.chooseLevelOfGame')
const cards: HTMLDivElement = document.querySelector('.cards')
const gameInfo__time: HTMLDivElement = document.querySelector('.gameInfo__time')
const gameInfo__score: HTMLDivElement = document.querySelector('.gameInfo__score')
let dataGame: Array<Card>
let openCard: Array<HTMLImageElement> = []
let numOfRigthCards: number = 0;
let totalOpenedInGame: Array<HTMLImageElement> = []



async function hendleNumbersOfCards(numOfCards) {
    console.log(numOfCards)
    const { data } = await axios.post('/get-data', { numOfCards })

    dataGame = data
    console.log(dataGame)

    let html = ''

    html += dataGame.map(d => {
        return `
        <div class="memory-card">
        <div class="back" id="${d.similarNum}">hello</div>
        <div class="front" >
        <img src="${d.img}" alt="${d.similarNum}" id="${d.similarNum}" />
        </div>
        </div>
        `
    }).join('')

    cards.innerHTML = html

    chooseLevelOfGame.style.display = "none"

}


function timer(): void {
    let seconds: any = 0;
    let minutes: number = 0;
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


