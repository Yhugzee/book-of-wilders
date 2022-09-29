const wilders = [
    {
        name: "hugo",
        image: "./profiles/hugo.png",
        bio: "I love music"
    },
    {
        name: "charlotte",
        image: "./profiles/charlotte.jpg",
        bio: 'I love to code'
    }
]

const carousel = document.querySelector(".carousel-inner")

function createCard(title, imageUrl, description) {
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    carousel.append(carouselItem)

    const card = document.createElement('div')
    card.classList.add('card')
    carouselItem.append(card)

    const cardImg = document.createElement('img')
    cardImg.classList.add('card-img-top')
    cardImg.src = imageUrl,
        card.append(cardImg)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.append(cardBody)

    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = title
    cardBody.append(cardTitle)

    const details = document.createElement('details')
    cardBody.append(details)

    const summary = document.createElement('summary')
    summary.textContent = `About Me`
    details.append(summary)

    const p = document.createElement('p')
    p.textContent = description
    details.append(p)

    const a = document.createElement('a')
    a.classList.add = 'btn'
    a.classList.add = 'btn-primary'
    a.textContent = "Go somewhere"
    a.href = '#'
    details.append(a)
}


for (let i = 0; i < wilders.length; i++) {
    createCard(wilders[i].name, wilders[i].image, wilders[i].bio)
}