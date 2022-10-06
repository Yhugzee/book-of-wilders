import shuffledWilders from "./wilders.js"

const sectionLittle = document.querySelector('.section-little')



function createCard(index, title, imageUrl) {
    const card = document.createElement('button')
    card.classList.add('card-little')
    sectionLittle.append(card)
    
    const cardImg = document.createElement('img')
    cardImg.classList.add('card-img-top')
    cardImg.src = imageUrl
    card.append(cardImg)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.append(cardBody)

    const cardTitle = document.createElement('div')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = title
    cardBody.append(cardTitle)

    card.addEventListener("click", () => {
        $(".carousel").carousel(index);
        $("html, body").animate(
            { scrollTop: "120" }, 1000);
    })
}

for (let i = 0; i < shuffledWilders.length; i++) {
    createCard(i, shuffledWilders[i].name, shuffledWilders[i].image)
}