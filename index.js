const wilders = [
    {
        name: "Adnan Bakaev",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Alexis Durin",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Benoît Galey",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Charlotte Kieffer",
        image: "./profiles/charlotte.png",
        qmusic: "Vos gouts musicaux :",
        music: "Le rock et le métal (les Foo Fighters, Radiohead, Ministry, The Black Keys)",
        hobbie: "La photo, les jeux vidéos, lire de la science-fiction",
        likewcs: "L'envie de découvrir un nouveau métier avec de nouveaux défis !"

    },
    {
        name: "Edouard Tractere",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Farid Himeur",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Frédéric Michel",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux",
        music: "Je n'ai pas de style préféré, je m'interresse à tout.",
        hobbie: "Informatique - Arts marrtiaux (karaté) - échecs -photo - secourisme",
        likewcs: "Le bus, non plus sérieusement, une reconversion professionnelle, une attirance certaine pour le code et un grand intérêt pour l'apprentissage permanent.",
    },
    {
        name: "Herimanana Rasolonirina",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Hugo Rodriguez",
        image: "./profiles/hugo.png",
        qmusic: "Vos gouts musicaux :",
        music: "Lofi & Rap (Lil Peep ❤️)",
        hobbie: "L'informatique et les jeux vidéos",
        likewcs: "Le plaisir de coder",
    },
    {
        name: "Jessy Hazart",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "Peu importe tant que j'aime ce que j'écoute.",
        hobbie: "Programmation, jeux vidéo, football",
        likewcs: "J'aime coder"
    },
    {
        name: "José Alves",
        image: "./profiles/jose.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Louen Maginot",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Lucie Froissart",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Mounir Mekoui",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Olivier Lopez",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "Rock - Electro",
        hobbie: "Jeux vidéo - Série TV / Anime - Voyage - Moto"
    },
    {
        name: "Olivier Nou",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Pierre Yves Gille Mignon",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Robin Kolasinski",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "Celtic métal",
        hobbie: "Jeux vidéos, bière",
        likewcs: "Je cherchais une formation en développement web",
    },
    {
        name: "Rohan Molinillo",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Romain Bronquard",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Rémi Lagreze",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Simon Bullado",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Valentin Marlois",
        image: "./images/blank-profile.jpeg",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    }
]

const shuffleFunction = (array) =>{
    return array.sort((a,b) => 0.5 - Math.random())
}
const shuffledWilders = shuffleFunction(wilders)

const carousel = document.querySelector(".carousel-inner")

function createCard(title, imageUrl, music, hobbies, likeswcs) {
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

    const p = document.createElement('p')
    p.textContent = music
    details.append(p)

    const qmusic = document.createElement('p')
    qmusic.textContent = qmusic;
    details.append(p)

    const hobbie = document.createElement('p')
    hobbie.textContent = hobbies;
    details.append(hobbie)

    const likewcs = document.createElement('p')
    likewcs.textContent = likeswcs;
    details.append(likewcs)

    const a = document.createElement('a')
    a.classList.add('btn')
    a.classList.add('btn-primary')
    a.textContent = "Go somewhere"
    a.href = '#'
    details.append(a)

}

for (let i = 0; i < wilders.length; i++) {
    createCard(shuffledWilders[i].name, shuffledWilders[i].image, shuffledWilders[i].qmusic, shuffledWilders[i].music, shuffledWilders[i].hobbie, shuffledWilders[i].likewcs)
}