const root = document.querySelector('.root')
function uid() {
    return Date.now().toString(36) + Math.random().toString(36);
}

interface Card {
    id: string
    similarNum: number
    img: string
}


const cards: Array<Card> = [
    { id: uid(), similarNum: 1, img: "https://spca.co.il/wp-content/uploads/2021/11/dog.jpeg" },
    { id: uid(), similarNum: 1, img: "https://spca.co.il/wp-content/uploads/2021/11/dog.jpeg" },
    { id: uid(), similarNum: 2, img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" },
    { id: uid(), similarNum: 2, img: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" },
    { id: uid(), similarNum: 3, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" },
    { id: uid(), similarNum: 3, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" },
    { id: uid(), similarNum: 4, img: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg" },
    { id: uid(), similarNum: 4, img: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg" },
    { id: uid(), similarNum: 5, img: "https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/1500566326-gettyimages-512366437-1.jpg" },
    { id: uid(), similarNum: 5, img: "https://hips.hearstapps.com/clv.h-cdn.co/assets/17/29/1500566326-gettyimages-512366437-1.jpg" },
    { id: uid(), similarNum: 6, img: "https://media.istockphoto.com/photos/beagle-5-years-old-sitting-in-front-of-white-background-picture-id962855368?k=20&m=962855368&s=612x612&w=0&h=hVGDbK_fz847oEhHHPcD-sTmMxg2Zko09iQbfCxVZpM=" },
    { id: uid(), similarNum: 6, img: "https://media.istockphoto.com/photos/beagle-5-years-old-sitting-in-front-of-white-background-picture-id962855368?k=20&m=962855368&s=612x612&w=0&h=hVGDbK_fz847oEhHHPcD-sTmMxg2Zko09iQbfCxVZpM=" },
    // { id: uid(), similarNum: 7, img: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    // { id: uid(), similarNum: 7, img: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
]

function shuffleCards(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

function checkCard() {

}

function createCard(cards) {

    const shuffleTemporaryCards = shuffleCards(cards)

    let html = ''
    for (let i = 0; i < shuffleTemporaryCards.length; i++) {

        html += `
            <div class="cardImg" onClick="checkCard("${shuffleTemporaryCards[i].similarNum}")">
                <img src="${shuffleTemporaryCards[i].img}" alt="card"/>
            </div>
        `
        // console.log(shuffleTemporaryCards[i])
    }

    root.innerHTML = html
    console.log(html)
}

createCard(cards)
// createCard()