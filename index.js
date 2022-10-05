const wilders = [
    {
        name: "Adnan Bakaev",
        image: "./images/adnan.png",
        qmusic: "Tes goûts musicaux :",
        music: "J'aime presque tous les genres musicaux",
        qhobbie: "Tes hobbies :",
        hobbie: "Livres, films et football",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "J'aime le monde de la technologie, la programmation, apprendre quelque chose de nouveau, et aussi un grand désir d'avoir un travail que j'aime.",
    },
    {
        name: "Alexis Durin",
        image: "./images/alexis.png",
        qmusic: "Tes goûts musicaux :",
        music: "Rap et funk",
        qhobbie: "Tes hobbies :",
        hobbie: "Sports de combat",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je souhaitais me reconvertir et une formation rapide me convient",
    },
    {
        name: "Benoît Galey",
        image: "./images/benoit.png",
        qmusic: "Tes goûts musicaux :",
        music: "Variété/Reggae/Rock/Rap ",
        qhobbie: "Tes hobbies :",
        hobbie: "Randonnée, ski",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "J'aime le code",
    },
    {
        name: "Charlotte Kieffer",
        image: "./images/charlotte.png",
        qmusic: "Tes goûts musicaux :",
        music: "Le rock et le métal (les Foo Fighters, Radiohead, Ministry, The Black Keys)",
        qhobbie: "Tes hobbies :",
        hobbie: "La photo, les jeux vidéos, la science-fiction",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "L'envie de découvrir un nouveau métier avec de nouveaux défis !"

    },
    {
        name: "Edouard Tractere",
        image: "./images/edouard.png",
        qmusic: "Tes goûts musicaux :",
        music: "Rap, classique et funk",
        qhobbie: "Tes hobbies :",
        hobbie: "Les jeux vidéos",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je suis là pour approfondir mes connaissances et j'aime la méthode de travail de la Wild",
    },
    {
        name: "Farid Himeur",
        image: "./images/blank-profile.jpeg",
        qmusic: "Tes goûts musicaux :",
        music: "",
        qhobbie: "Tes hobbies :",
        hobbie: "",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "",
    },
    {
        name: "Frédéric Michel",
        qmusic: "Tes goûts musicaux :",
        image: "./images/fred.png",
        music: "Je n'ai pas de style préféré, je m'interresse à tout.",
        qhobbie: "Tes hobbies :",
        hobbie: "Informatique, Arts martiaux (karaté), échecs, photo, secourisme",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Le bus, non plus sérieusement, une reconversion professionnelle, une attirance certaine pour le code et un grand intérêt pour l'apprentissage permanent.",
    },
    {
        name: "Herimanana Rasolonirina",
        qmusic: "Tes goûts musicaux :",
        image: "./images/heri.png",
        music: "La musique Malgache",
        qhobbie: "Tes hobbies :",
        hobbie: "Pas de hobbies particuliers",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je suis passionné par le code depuis longtemps",
    },
    {
        name: "Hugo Rodriguez",
        image: "./profiles/hugo.png",
        qmusic: "Tes goûts musicaux :",
        music: "Lofi & Rap (Lil Peep ❤️)",
        qhobbie: "Tes hobbies :",
        hobbie: "L'informatique et les jeux vidéos",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Le plaisir de coder",
    },
    {
        name: "Jessy Hazart",
        image: "./images/jessy.png",
        qmusic: "Tes goûts musicaux :",
        music: "Peu importe tant que j'aime ce que j'écoute.",
        qhobbie: "Tes hobbies :",
        hobbie: "Programmation, jeux vidéo, football",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "J'aime coder"
    },
    {
        name: "José Alves",
        image: "./images/jose.png",
        qmusic: "Tes goûts musicaux :",
        music: "Funk et classique",
        qhobbie: "Tes hobbies :",
        hobbie: "Le piano, les arts martiaux et la psychologie",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je voulais me reconvertir dans un métier d'avenir",
    },
    {
        name: "Louen Maginot",
        image: "./images/louen.png",
        qmusic: "Tes goûts musicaux :",
        music: "Tout type de musique",
        qhobbie: "Tes hobbies :",
        hobbie: "Le sport et l'informatique",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je souhaite créer des site web et en faire mon métier",
    },
    {
        name: "Lucie Froissart",
        image: "./images/lucie.png",
        qmusic: "Tes goûts musicaux :",
        music: "J'aime tous les styles",
        qhobbie: "Tes hobbies :",
        hobbie: "Les jeux vidéos, la lecture, les animés",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je veux apprendre à coder grâce à une formation courte",
    },
    {
        name: "Mounir Mekoui",
        image: "./images/mounir.png",
        qmusic: "Tes goûts musicaux :",
        music: "Le rap français et le hip-hop",
        qhobbie: "Tes hobbies :",
        hobbie: "Les jeux vidéos et sortir avec mes amis",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Pour construire un avenir autour de mon appétance pour le numérique",
    },
    {
        name: "Olivier Lopez",
        image: "./images/olivier_l.png",
        qmusic: "Tes goûts musicaux :",
        music: "Rock - Electro",
        qhobbie: "Tes hobbies :",
        hobbie: "Jeux vidéo - Série TV / Anime - Voyage - Moto",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likeswcs: "une reconversion professionnelle pour travailler dans le domaine de l'informatique"
    },
    {
        name: "Olivier Nou",
        image: "./images/olivier_n.png",
        qmusic: "Tes goûts musicaux :",
        music: "Le métal",
        qhobbie: "Tes hobbies :",
        hobbie: "La musique et la photo",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Pour apprendre le code et le transmettre à ma fille",
    },
    {
        name: "Pierre Yves Gille Mignon",
        image: "./images/pierre_yves.png",
        qmusic: "Tes goûts musicaux :",
        music: "Le rap et le hardcore",
        qhobbie: "Tes hobbies :",
        hobbie: "Le sport et les jeux vidéos",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Le système d'apprentissage court et intensif me plait",
    },
    {
        name: "Robin Kolasinski",
        image: "./images/robin.png",
        qmusic: "Tes goûts musicaux :",
        music: "Celtic métal",
        qhobbie: "Tes hobbies :",
        hobbie: "Jeux vidéos, bière",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je cherchais une formation en développement web",
    },
    {
        name: "Rohan Molinillo",
        image: "./images/rohan.png",
        qmusic: "Tes goûts musicaux :",
        music: "Métal, dubstep et pop",
        qhobbie: "Tes hobbies :",
        hobbie: "Jeux vidéos, musique et création photoshop",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "En reconversion professionnelle, j'ai souhaité me diriger vers le métier de développeur web.",
    },
    {
        name: "Romain Bronquard",
        image: "./images/romain_b.png",
        qmusic: "Tes goûts musicaux :",
        music: "Le rap",
        qhobbie: "Tes hobbies :",
        hobbie: "Les jeux vidéos et les animés",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Cela fait 3 ans que je souhaite devenir developpeur web",
    },
    {
        name: "Rémi Lagreze",
        image: "./images/remi.png",
        qmusic: "Tes goûts musicaux :",
        music: "Rap et rock",
        qhobbie: "Tes hobbies :",
        hobbie: "Les jeux vidéos",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "L'amour du code",
    },
    {
        name: "Simon Bullado",
        image: "./images/simon.png",
        qmusic: "Tes goûts musicaux:",
        music: "Le métal et le rock",
        qhobbie: "Tes hobbies :",
        hobbie: "Le VTT et les PC",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je veux me reconvertir et devenir développeur web",
    },
    {
        name: "Valentin Marlois",
        image: "./images/valentin.png",
        qmusic: "Tes goûts musicaux :",
        music: "Rap et electro",
        qhobbie: "Tes hobbies :",
        hobbie: "La moto, la pêche",
        qwcs: "Ce qui t'a ammené à la Wild ?",
        likewcs: "Je cherchais une formation accessible à tous et de courte durée",
    },
    {
        name: "Lily",
        image: "./images/lili.png",
        qmusic: "",
        music: "Mascotte de la Session",
        qhobbie: "",
        hobbie: "Carresses et câlins à volonté.",
        qwcs: "",
        likewcs: "",
    }
]

const shuffleFunction = (array) => {
    return array.sort((a, b) => 0.5 - Math.random())
}
const shuffledWilders = shuffleFunction(wilders)

const carousel = document.querySelector(".carousel-inner")

function createCard(title, imageUrl, qumusic, music, quhobbie, hobbies, quwcs, likeswcs) {
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
    a.textContent = "Go somewhere"
    a.href = '#'
    details.append(a)

}

for (let i = 0; i < wilders.length; i++) {
    createCard(shuffledWilders[i].name, shuffledWilders[i].image, shuffledWilders[i].qmusic, shuffledWilders[i].music, shuffledWilders[i].qhobbie, shuffledWilders[i].hobbie, shuffledWilders[i].qwcs, shuffledWilders[i].likewcs)
}
