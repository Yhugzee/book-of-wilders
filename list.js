const wilders2 = [
    {
        name: "Adnan Bakaev",
        image: "./images/adnan.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Alexis Durin",
        image: "./images/alexis.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Benoît Galey",
        image: "./images/benoit.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Charlotte Kieffer",
        image: "./images/charlotte.png",
        qmusic: "Vos gouts musicaux :",
        music: "Le rock et le métal (les Foo Fighters, Radiohead, Ministry, The Black Keys)",
        hobbie: "La photo, les jeux vidéos, lire de la science-fiction",
        likewcs: "L'envie de découvrir un nouveau métier avec de nouveaux défis !"

    },
    {
        name: "Edouard Tractere",
        image: "./images/edouard.png",
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
        image: "./images/fred.png",
        qmusic: "Vos gouts musicaux",
        music: "Je n'ai pas de style préféré, je m'interresse à tout.",
        hobbie: "Informatique - Arts marrtiaux (karaté) - échecs -photo - secourisme",
        likewcs: "Le bus, non plus sérieusement, une reconversion professionnelle, une attirance certaine pour le code et un grand intérêt pour l'apprentissage permanent.",
    },
    {
        name: "Herimanana Rasolonirina",
        image: "./images/heri.png",
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
        image: "./images/jessy.png",
        qmusic: "Vos gouts musicaux :",
        music: "Peu importe tant que j'aime ce que j'écoute.",
        hobbie: "Programmation, jeux vidéo, football",
        likewcs: "J'aime coder"
    },
    {
        name: "José Alves",
        image: "./images/jose.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Louen Maginot",
        image: "./images/louen.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Lucie Froissart",
        image: "./images/lucie.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Mounir Mekoui",
        image: "./images/mounir.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Olivier Lopez",
        image: "./images/olivier_l.png",
        qmusic: "Vos gouts musicaux :",
        music: "Rock - Electro",
        hobbie: "Jeux vidéo - Série TV / Anime - Voyage - Moto"
    },
    {
        name: "Olivier Nou",
        image: "./images/olivier_n.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Pierre-Yves Gille Mignon",
        image: "./images/pierre_yves.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Robin Kolasinski",
        image: "./images/robin.png",
        qmusic: "Vos gouts musicaux :",
        music: "Celtic métal",
        hobbie: "Jeux vidéos, bière",
        likewcs: "Je cherchais une formation en développement web",
    },
    {
        name: "Rohan Molinillo",
        image: "./images/rohan.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Romain Bronquard",
        image: "./images/romain_b.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Rémi Lagreze",
        image: "./images/remi.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Simon Bullado",
        image: "./images/simon.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Valentin Marlois",
        image: "./images/valentin.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    }
]


const sectionLittle = document.querySelector('.section-little')



function createCard(title, imageUrl) {
    const card = document.createElement('div')
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


}

for (let i = 0; i < wilders2.length; i++) {
    createCard(wilders2[i].name, wilders2[i].image)
}