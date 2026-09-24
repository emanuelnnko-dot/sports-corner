const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// const products = [
//     {id: 1, name: "laptop", price: 999.9, stock: 10},
//     { id: 2, name: "Smartphone", price: 499.99, stock: 25},
//     { id: 3, name: "Headphones", price: 149.99, stock: 50},
//     { id: 4, name: "Earphones", price: 49.99, stock: 30}
// ];

const news = [
    {
        id: 1,
        category: "Football",
        title: "Gabriel Martinelli Set for Saudi Switch As Pressure Mounts for Attacking Reinforcements",
        titleLink: "news-story.html?id=1",
        date: "25 Aug 2026",
        location: "London, UK",
        imageUrl: "images/football/gabriel-martineli.png",
        imageAlt: "Gabriel Martineli",
        newsIntro: "Mikel Arteta is set to facilitate a record-breaking departure as the Brazilian winger nears a blockbuster move to Al Hilal, ending a seven-year spell in North .",
        newsStory: `Mikel Arteta is set to facilitate a record-breaking departure as the Brazilian winger nears blockbuster move to Al Hilal, ending a seven-year spell in North London. 
        Arsenal are in final stage talks with Saudi Arabian club Al Hilal over the permanent transfer of Gabriel Martinelli for a fee between £50m - £55m as per Fabrizio Romano.

        According to several reports, Mikel Arteta has held meetings with the Brazilian over his role
        this season and the outcome of those meetings is now pointing towards an exit for the 25
        year-old following the signing of Chris Tzolis from Club Brugge earlier this summer. <br> <br>

        Martinelli is set to leave North London having scored 62 goals and provided 36 assists in 317
        appearances in his 7 years at the club. The left-winger signed for the club under Unai Emery in
        2019 from then Brazilian 3rd division side Ituano for a fee of £8m and made his competitive
        debut for the first team against Newcastle, having initially been signed to play for the U21s
        side. <br> <br>

        'Gabi' is set to leave N7 with a plethora of crucial goals for Arsenal over his career,
        including *THAT* solo run and goal in a 2-2 draw vs Chelsea when the side were down to 10 men,
        the late winning goal against Manchester City at The Emirates Stadium and the goal to seal the
        victory over Real Madrid at the Bernabeu in the Champions League to name a few. He is also set
        to leave the club as a Premier League Champion, having also won the FA Cup and 2x Community
        Shield trophies across his 7 years in England. <br> <br>

        Once the deal goes through, Arsenal's attention must turn to a reinforcement out wide. Having
        also lost Leandro Trossard to Besiktas this summer, many could argue that Arsenal have regressed
        in their wing options, with only Tzolis coming in, in the attacking department so far. Despite
        the Greek international's positive start to his Arsenal career, Mikel Arteta will no doubt want
        cover in all areas as Arsenal look to 'attack' all four major trophies this season. <br> <br>


        If the fee being spoken about does come to fruition, the sale of Gabriel Martinelli will mark
        the club's record sale, which currently stands at Alex Oxlade-Chamberlain to Liverpool in 2017
        for a fee just north of £35m. Whilst a deal between Arsenal and Al Hilal is not quite confirmed,
        having been left out of the squad during Arsenal's 3-0 opening day victory over Coventry City,
        all talk is now looking towards Gabriel Martinelli leaving the club for Saudi Arabia very
        shortly. More updates will no doubt, follow shortly.`
    },
    {
        id: 2,
        category: "Football",
        title: "Champions League draw: Real Madrid-Arsenal, PSG-Manchester City, Bayern Munich-Manchester United among League Phase fixtures",
        titleLink: "news-story.html?id=2",
        date: "25 Aug 2026",
        location: "Monaco, Monaco",
        imageUrl: "images/football/champions-league.png",
        imageAlt: "Champions League",
        newsIntro: "UEFA held the draw for the League Phase portion of the 2026-27 Champions League on Thursday in Monaco. The competition will kick off Sept. 8 with Matchday 1 with 36 teams vying to be among 24 to advance to the knockout stages.",
        newsStory: ""
    },
    {
        id: 3,
        category: "Basketball",
        title: "Jonathan Kuminga reaches 2-year, $13 million deal to join Timberwolves after split with Hawks",
        titleLink: "news-story.html?id=3",
        date: "27 Aug 2026",
        location: "Minnesota, US",
        imageUrl: "images/basketball/jonathan-kuminga.png",
        imageAlt: "Jonathan Kuminga",
        newsIntro: "The Minnesota Timberwolves agreed to a two-year, $13 million deal to land Kuminga on Wednesday, according to ESPN's Shams Charania. The move came after the Hawks officially declined Kuminga's team option in June, making him a free agent after his tumultuous exit with the Golden State Warriors last season.",
        newsStory: ""
    },
    {
        id: 4,
        category: "Football",
        title: "Fifa announces sanctions after World Cup final chaos",
        titleLink: "news-story.html?id=4",
        date: "23 Aug 2026",
        location: "Zurich, Switzerland",
        imageUrl: "images/football/fifa-announce-punishment.png",
        imageAlt: "Players in chaos",
        newsIntro: "FIFA made official this Friday (21) the punishments for those involved in the scuffle after the final whistle of Spain vs. Argentina, which decided the World Cup.Paredes and Molina, both from the ...",
        newsStory: ""
    },
    {
        id: 5,
        category: "Football",
        title: "FIFA president Gianni Infantino says he received 'warm welcome' in Caribbean",
        titleLink: "news-story.html?id=4",
        date: "23 Aug 2026",
        location: "Santo Domingo, Dominican",
        imageUrl: "images/football/gianni-ifantino.png",
        imageAlt: "Gianni Ifantino",
        newsIntro: "Concacaf president Victor Montagliani reportedly told the embattled FIFA president to consider skipping the youth event in the",
        newsStory: ""
    }
    
]

app.get("/api/news", (req, res) => {
    res.status(200).json(news);
});

app.get("/api/news/:id", (req, res) => {
    const newsId = parseInt(req.params.id);
    const selectedNews = news.find(n => n.id === newsId);
    if(!selectedNews) {
        // status code: 404 - news was not found
        return res.status(404).json(`News is not available`);
    } else {
        // status code: 200 OK - response is successful 
        res.status(200).json(selectedNews);
        // console.log(`News is available:, news`);
    }
});


// Handle admin registration
// const admins = [
//     {id: 477, employeeId: 1234, email: "emanuelnnko@gmail.com", firstName: "Emanuel", lastName: "Nnko", password: 123}
// ];
const admins = [];
app.post("/api/admins", (req, res) => {
    const UUID = crypto.randomUUID();
    const newAdmin = {
        id: UUID,
        employeeId: req.body.employeeId,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    }
    let prevArrayLength = admins.length;
    admins.push(newAdmin);
    let newArrayLength = admins.length;

    if (newArrayLength > prevArrayLength) {
        res.status(201).json({
        message: "You have created an account successfully",
        data: newAdmin
    });
    } else {
        res.status(500).json("Sorry, the account was not created");
    }
});

// Handle admin login verification
app.post("/api/admins/login", (req, res) => {

    console.log(req.body);
    let foundAdmin = admins.find(admin => admin.email === req.body.loginEmail && admin.password === req.body.loginPassword);

    if(!foundAdmin) {
        // status code: 404 - No matching
        return res.status(404).json(`Fail to log in`);
    } else {
        // status code: 200 OK - response is successful 
        res.status(200).json(foundAdmin);
        // console.log(`Matched:, foundAdmin`);
    }

});

// const body = {
//         loginEmail: "emanuelnnko@gmail.com",
//         loginPassword: 123,
//     }

// let foundAdmin = admins.find(admin => admin.email === body.loginEmail && admin.password === body.loginPassword);
// console.log(foundAdmin);

app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`); 
});