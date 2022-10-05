const wilders2 = [
    {
        name: "Adnan Bakaev",
        image: "./profiles/adnan.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Alexis Durin",
        image: "./profiles/alexis.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Benoît Galey",
        image: "./profiles/benoit.png",
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
        image: "./profiles/edouard.png",
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
        image: "./profiles/fred.png",
        qmusic: "Vos gouts musicaux",
        music: "Je n'ai pas de style préféré, je m'interresse à tout.",
        hobbie: "Informatique - Arts marrtiaux (karaté) - échecs -photo - secourisme",
        likewcs: "Le bus, non plus sérieusement, une reconversion professionnelle, une attirance certaine pour le code et un grand intérêt pour l'apprentissage permanent.",
    },
    {
        name: "Herimanana Rasolonirina",
        image: "./profiles/heri.png",
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
        image: "./profiles/jessy.png",
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
        image: "./profiles/louen.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Lucie Froissart",
        image: "./profiles/lucie.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Mounir Mekoui",
        image: "./profiles/mounir.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Olivier Lopez",
        image: "./profiles/olivier_l.png",
        qmusic: "Vos gouts musicaux :",
        music: "Rock - Electro",
        hobbie: "Jeux vidéo - Série TV / Anime - Voyage - Moto"
    },
    {
        name: "Olivier Nou",
        image: "./profiles/olivier_n.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Pierre-Yves Gille Mignon",
        image: "./profiles/pierre_yves.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Robin Kolasinski",
        image: "./profiles/robin.png",
        qmusic: "Vos gouts musicaux :",
        music: "Celtic métal",
        hobbie: "Jeux vidéos, bière",
        likewcs: "Je cherchais une formation en développement web",
    },
    {
        name: "Rohan Molinillo",
        image: "./profiles/rohan.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Romain Bronquard",
        image: "./profiles/romain_b.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Rémi Lagreze",
        image: "./profiles/remi.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Simon Bullado",
        image: "./profiles/simon.png",
        qmusic: "Vos gouts musicaux :",
        music: "",
        hobbie: "",
        likewcs: "",
    },
    {
        name: "Valentin Marlois",
        image: "./profiles/valentin.png",
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