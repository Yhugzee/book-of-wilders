import shuffledWilders from "./wilders.js"
const shuffleFunction = (array) => {
    return array.sort((a, b) => 0.5 - Math.random())
}

const carousel = document.querySelector(".carousel-inner")

function createCard(title, imageUrl, qumusic, music, quhobbie, hobbies, quwcs, likeswcs, link) {
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    carousel.append(carouselItem)

    const card = document.createElement('div')
    card.classList.add('card')
    carouselItem.append(card)

    const pulse = document.createElement('div')
    pulse.classList.add('pulse')
    card.append(pulse)

    const cardImg = document.createElement('img')
    cardImg.classList.add('card-img-top')
    cardImg.src = imageUrl,
        pulse.append(cardImg)

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

    const qmusic = document.createElement('p')
    qmusic.innerHTML = `<strong>${qumusic}</strong>`;
    details.append(qmusic)

    const musique = document.createElement('p')
    musique.textContent = music
    details.append(musique)

    const qhobbie = document.createElement('p')
    qhobbie.innerHTML = `<strong>${quhobbie}</strong>`;
    details.append(qhobbie)

    const hobbie = document.createElement('p')
    hobbie.textContent = hobbies;
    details.append(hobbie)

    const qwcs = document.createElement('p')
    qwcs.innerHTML = `<strong>${quwcs}</strong>`;
    details.append(qwcs)

    const likewcs = document.createElement('p')
    likewcs.textContent = likeswcs;
    details.append(likewcs)

    const a = document.createElement('a')
    a.classList.add('btn')
    a.classList.add('btn-primary')
    a.textContent = `Mon profil LinkedIn`
    a.href = link
    a.target = '_blank'
    details.append(a)


}

for (let i = 0; i < shuffledWilders.length; i++) {
    createCard(shuffledWilders[i].name, shuffledWilders[i].image, shuffledWilders[i].qmusic, shuffledWilders[i].music, shuffledWilders[i].qhobbie, shuffledWilders[i].hobbie, shuffledWilders[i].qwcs, shuffledWilders[i].likewcs, shuffledWilders[i].linkedin)
}

document.querySelector(".carousel-item").classList.add("active")
