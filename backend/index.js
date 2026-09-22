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
        newsIntro: "Mikel Arteta is set to facilitate a record-breaking departure as the Brazilian winger nears a blockbuster move to Al Hilal, ending a seven-year spell in North London.",
        newsStory: ""
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
    // console.log(products);
});





app.listen(PORT, () => {
    console.log(`Server is running locally at http://localhost:${PORT}`); 
});