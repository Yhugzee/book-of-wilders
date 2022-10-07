const wilders = [
    {
        name: "Adnan Bakaev",
        image: "./profiles/adnan2.jpg",
        qmusic: "Tes goûts musicaux ?",
        music: "J'aime presque tous les genres musicaux",
        qhobbie: "Tes hobbies ?",
        hobbie: "Livres, films et football",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "J'aime le monde de la technologie, la programmation, apprendre quelque chose de nouveau, et aussi un grand désir d'avoir un travail que j'aime.",
        linkedin: 'https://www.linkedin.com/in/adnan-bakaev-a70463249/'
    },
    {
        name: "Alexis Durin",
        image: "./profiles/alexis.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Rap et funk",
        qhobbie: "Tes hobbies ?",
        hobbie: "Sports de combat",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je souhaitais me reconvertir et une formation rapide me convient",
        linkedin: "https://www.linkedin.com/in/alexis-durin-768435249/"
    },
    {
        name: "Benoît Galey",
        image: "./profiles/benoit.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Variété/Reggae/Rock/Rap ",
        qhobbie: "Tes hobbies ?",
        hobbie: "Randonnée, ski",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "J'aime le code",
        linkedin: 'https://www.linkedin.com/in/benoit-galey-066115145/'
    },
    {
        name: "Charlotte Kieffer",
        image: "./profiles/charlotte.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Le rock et le métal (les Foo Fighters, Radiohead, Ministry, The Black Keys)",
        qhobbie: "Tes hobbies ?",
        hobbie: "La photo, les jeux vidéos, la science-fiction",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "L'envie de découvrir un nouveau métier avec de nouveaux défis !",
        linkedin: 'https://www.linkedin.com/in/charlotte-kieffer-023424221/'

    },
    {
        name: "Edouard Tractere",
        image: "./profiles/edouard.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Rap, classique et funk",
        qhobbie: "Tes hobbies ?",
        hobbie: "Les jeux vidéos",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je suis là pour approfondir mes connaissances et j'aime la méthode de travail de la Wild",
        linkedin: 'https://www.linkedin.com/in/edouard-tractere-4559441b8/'
    },
    {
        name: "Farid Himeur",
        image: "./profiles/farid.png",
        qmusic: "Tes goûts musicaux ?",
        music: "TuPac",
        qhobbie: "Tes hobbies ?",
        hobbie: "League of legends, voyages et sport",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Mon intêret pour les cartes graphiques et les CPU. Mais surtout, j'aimerais développer un serveur qui nécessite du Javascript.",
        linkedin: 'https://www.linkedin.com/in/farid-himeur/'
    },
    {
        name: "Frédéric Michel",
        qmusic: "Tes goûts musicaux ?",
        image: "./profiles/fred.png",
        music: "Je n'ai pas de style préféré, je m'interresse à tout.",
        qhobbie: "Tes hobbies ?",
        hobbie: "Informatique, Arts martiaux (karaté), échecs, photo, secourisme",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Le bus, non plus sérieusement, une reconversion professionnelle, une attirance certaine pour le code et un grand intérêt pour l'apprentissage permanent.",
        linkedin: 'https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-michel-6a9982229/'
    },
    {
        name: "Herimanana Rasolonirina",
        qmusic: "Tes goûts musicaux ?",
        image: "./profiles/heri.png",
        music: "La musique Malgache",
        qhobbie: "Tes hobbies ?",
        hobbie: "Pas de hobbies particuliers",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je suis passionné par le code depuis longtemps",
        linkedin: "https://www.linkedin.com/in/herimanana/"
    },
    {
        name: "Hugo Rodriguez",
        image: "./profiles/hugo.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Lofi & Rap (Lil Peep ❤️)",
        qhobbie: "Tes hobbies ?",
        hobbie: "L'informatique et les jeux vidéos",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Le plaisir de coder",
        linkedin: 'https://www.linkedin.com/in/hugo-rodriguez51/'
    },
    {
        name: "Jessy Hazart",
        image: "./profiles/jessy.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Peu importe tant que j'aime ce que j'écoute.",
        qhobbie: "Tes hobbies ?",
        hobbie: "Programmation, jeux vidéo, football",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "J'aime coder",
        linkedin: 'https://www.linkedin.com/in/jessy-hazart3250/'
    },
    {
        name: "José Alves",
        image: "./profiles/jose.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Un peu de tout.",
        qhobbie: "Tes hobbies ?",
        hobbie: "Le piano, les arts martiaux et la psychologie",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je voulais me reconvertir dans un métier d'avenir",
        linkedin: 'https://www.linkedin.com/in/jos%C3%A9-alves-5195b922b/'
    },
    {
        name: "Louen Maginot",
        image: "./profiles/louen.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Tout type de musique",
        qhobbie: "Tes hobbies ?",
        hobbie: "Le sport et l'informatique",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je souhaite créer des site web et en faire mon métier",
        linkedin: 'https://www.linkedin.com/in/louen-maginot-a81222206/'
    },
    {
        name: "Lucie Froissart",
        image: "./profiles/lucie.png",
        qmusic: "Tes goûts musicaux ?",
        music: "J'aime tous les styles",
        qhobbie: "Tes hobbies ?",
        hobbie: "Les jeux vidéos, la lecture, les animés",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je veux apprendre à coder grâce à une formation courte",
        linkedin: 'https://www.linkedin.com/in/lucie-froissart-171b60246'
    },
    {
        name: "Mounir Mekoui",
        image: "./profiles/mounir.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Le rap français et le hip-hop",
        qhobbie: "Tes hobbies ?",
        hobbie: "Les jeux vidéos et sortir avec mes amis",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Pour construire un avenir autour de mon appétance pour le numérique",
        linkedin: 'https://www.linkedin.com/in/mounir-mekoui/'
    },
    {
        name: "Olivier Lopez",
        image: "./profiles/olivier_l.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Rock - Electro",
        qhobbie: "Tes hobbies ?",
        hobbie: "Jeux vidéo - Série TV / Anime - Voyage - Moto",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "une reconversion professionnelle pour travailler dans le domaine de l'informatique",
        linkedin: 'https://www.linkedin.com/in/olivier-lopez-432868251/'
    },
    {
        name: "Olivier Nou",
        image: "./profiles/olivier_n.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Le métal",
        qhobbie: "Tes hobbies ?",
        hobbie: "La musique et la photo",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Pour apprendre le code et le transmettre à ma fille",
        linkedin: 'https://www.linkedin.com/in/olivier-nou-8742aa84/'
    },
    {
        name: "Pierre Yves Gille Mignon",
        image: "./profiles/pierre_yves.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Le rap et le hardcore",
        qhobbie: "Tes hobbies ?",
        hobbie: "Le sport et les jeux vidéos",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Le système d'apprentissage court et intensif me plait",
        linkedin: 'https://www.linkedin.com/in/pierre-yves-gille-mignon-6723b7251/'
    },
    {
        name: "Robin Kolasinski",
        image: "./profiles/robin.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Celtic métal",
        qhobbie: "Tes hobbies ?",
        hobbie: "Jeux vidéos, bière",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je cherchais une formation en développement web",
        linkedin: 'https://www.linkedin.com/in/robin-kolasinski-930195166/'
    },
    {
        name: "Rohan Molinillo",
        image: "./profiles/rohan.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Métal, dubstep et pop",
        qhobbie: "Tes hobbies ?",
        hobbie: "Jeux vidéos, musique et création photoshop",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "En reconversion professionnelle, j'ai souhaité me diriger vers le métier de développeur web.",
        linkedin: 'https://www.linkedin.com/in/rohan-molinillo/'
    },
    {
        name: "Romain Bronquard",
        image: "./profiles/romain_b.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Le rap",
        qhobbie: "Tes hobbies ?",
        hobbie: "Les jeux vidéos et les animés",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Cela fait 3 ans que je souhaite devenir developpeur web",
        linkedin: 'https://www.linkedin.com/in/romain-bronquard/'
    },
    {
        name: "Rémi Lagreze",
        image: "./profiles/remi.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Rap et rock",
        qhobbie: "Tes hobbies ?",
        hobbie: "Les jeux vidéos",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "L'amour du code",
        linkedin: 'https://www.linkedin.com/in/r%C3%A9mi-lagreze-b90673251/'
    },
    {
        name: "Simon Bullado",
        image: "./profiles/simon.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Le métal et le rock",
        qhobbie: "Tes hobbies ?",
        hobbie: "Le VTT et les PC",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je veux me reconvertir et devenir développeur web",
        linkedin: 'https://www.linkedin.com/in/simon-bullado-008725150/'
    },
    {
        name: "Valentin Marlois",
        image: "./profiles/valentin.png",
        qmusic: "Tes goûts musicaux ?",
        music: "Rap et electro",
        qhobbie: "Tes hobbies ?",
        hobbie: "La moto, la pêche",
        qwcs: "Ce qui t'a amené à la Wild ?",
        likewcs: "Je cherchais une formation accessible à tous et de courte durée",
        linkedin: 'https://www.linkedin.com/in/valentin-marlois-1b1464183/'
    },
    {
        name: "Lily",
        image: "./profiles/lili.png",
        qmusic: "",
        music: "Mascotte de la Session",
        qhobbie: "",
        hobbie: "Carresses et câlins à volonté.",
        qwcs: "",
        likewcs: "",
        linkedin: "https://www.linkedin.com/company/chat-alors-comportementaliste-du-chat/"
    }
]

const shuffleFunction = (array) => {
    return array.sort((a, b) => 0.5 - Math.random())
}
const shuffledWilders = shuffleFunction(wilders);

export default shuffledWilders