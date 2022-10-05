const wilders = [
    {
        name: "Adnan Bakaev",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "J'aime presque tous les genres musicaux",
        hobbie: "Livres, films et football.",
        likewcs: "J'aime le monde de la technologie, la programmation, apprendre quelque chose de nouveau, et aussi un grand désir d'avoir un travail que j'aime.",
    },
    {
        name: "Alexis Durin",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Rap et funk",
        hobbie: "Sports de combat",
        likewcs: "Je souhaitais me reconvertir et une formation rapide me convient",
    },
    {
        name: "Benoît Galey",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Variété/Reggae/Rock/Rap ",
        hobbie: "Randonnée, ski",
        likewcs: "J'aime le code",
    },
    {
        name: "Charlotte Kieffer",
        image: "./profiles/charlotte.png",
        qmusic: "Tes goûts musicaux :",
        music: "Le rock et le métal (les Foo Fighters, Radiohead, Ministry, The Black Keys)",
        hobbie: "La photo, les jeux vidéos, la science-fiction",
        likewcs: "L'envie de découvrir un nouveau métier avec de nouveaux défis !"

    },
    {
        name: "Edouard Tractere",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Rape, classique et funk",
        hobbie: "Les jeux vidéos",
        likewcs: "Je suis là pour approfondir mes connaissances et j'aime la méthode de travail de la Wild",
    },
    {
        name: "Farid Himeur",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Frédéric Michel",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux",
        music: "Je n'ai pas de style préféré, je m'interresse à tout.",
        hobbie: "Informatique - Arts marrtiaux (karaté) - échecs -photo - secourisme",
        likewcs: "Le bus, non plus sérieusement, une reconversion professionnelle, une attirance certaine pour le code et un grand intérêt pour l'apprentissage permanent.",
    },
    {
        name: "Herimanana Rasolonirina",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux",
        music: "La musique Malgache",
        hobbie: "Pas de hobbies particuliers",
        likewcs: "Je suis passionné par le code depusi longtemps",
    },
    {
        name: "Hugo Rodriguez",
        image: "./profiles/hugo.png",
        qmusic: "Tes goûts musicaux :",
        music: "Lofi & Rap (Lil Peep ❤️)",
        hobbie: "L'informatique et les jeux vidéos",
        likewcs: "Le plaisir de coder",
    },
    {
        name: "Jessy Hazart",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Peu importe tant que j'aime ce que j'écoute.",
        hobbie: "Programmation, jeux vidéo, football",
        likewcs: "J'aime coder"
    },
    {
        name: "José Alves",
        image: "./profiles/jose.png",
        qmusic: "Tes goûts musicaux :",
        music: "Funk et classique",
        hobbie: "Le piano, les arts martiaux et la psychologie",
        likewcs: "Je voulaois me reconvertir dans un métier d'avenir",
    },
    {
        name: "Louen Maginot",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Tout type de musique",
        hobbie: "Le sport et l'informatique",
        likewcs: "Je souhaite créer des site web et en faire mon métier",
    },
    {
        name: "Lucie Froissart",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "J'aime tous les styles",
        hobbie: "Les jeux vidéos, la lecture, les animés",
        likewcs: "Je veux apprendre à coder grâce à une formation courte",
    },
    {
        name: "Mounir Mekoui",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Le rap français et le hip-hop",
        hobbie: "Les jeux vidéos et sortir avec mes amis",
        likewcs: "Pour construire un avenir autour de mon appétance pour le numérique",
    },
    {
        name: "Olivier Lopez",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Rock - Electro",
        hobbie: "Jeux vidéo - Série TV / Anime - Voyage - Moto"
    },
    {
        name: "Olivier Nou",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Le métal",
        hobbie: "La musique et la photo",
        likewcs: "Pour apprendre le code et le transmettre à ma fille",
    },
    {
        name: "Pierre Yves Gille Mignon",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Le rap et le hardcore",
        hobbie: "Le sport et les jeux vidéos",
        likewcs: "Le système d'apprentissage court et intensif me plait",
    },
    {
        name: "Robin Kolasinski",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Celtic métal",
        hobbie: "Jeux vidéos, bière",
        likewcs: "Je cherchais une formation en développement web",
    },
    {
        name: "Rohan Molinillo",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Métal, dubstep et pop",
        hobbie: "Jeux vidéos, musique et création photoshop",
        likewcs: "En reconversion professionnelle, j'ai souhaité me diriger vers le métier de développeur web.",
    },
    {
        name: "Romain Bronquard",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Le rap",
        hobbie: "Les jeux vidéos et les animés",
        likewcs: "Cela fait 3 ans que je souhaite devenir developpeur web",
    },
    {
        name: "Rémi Lagreze",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Rap et rock",
        hobbie: "Les jeux vidéos",
        likewcs: "L'amour du code",
    },
    {
        name: "Simon Bullado",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Le métal et le rock",
        hobbie: "Le VTT et les PC",
        likewcs: "Je veux me reconvertir etd evenir développeur web",
    },
    {
        name: "Valentin Marlois",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "Rap et electro",
        hobbie: "La moto, la pêche",
        likewcs: "Je cherchais une formation accessible à tous et de courte durée",
    }
]

const shuffleFunction = (array) => {
    return array.sort((a, b) => 0.5 - Math.random())
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