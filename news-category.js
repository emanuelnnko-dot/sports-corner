const mainSectionAllNews = document.getElementById("main-section-all-news");

const API_URL = "http://localhost:5000/api/news";

// let allNews = [];
async function fetchAllNews() {
    try{
        const response = await fetch(`${API_URL}`);
        const result = await response.json();
        if (!response.ok) {
            // console.log(result);
            throw new Error(result || "Failed to retrieve news");
        } else {
            console.log(result);

            // Functionality for searching URL params ***
            const queryString = window.location.search;
            console.log(queryString);
            const urlParams = new URLSearchParams(queryString);
            console.log(urlParams);
            const newsCategory = urlParams.get("category");
            console.log(newsCategory);

            const pageTitle = document.querySelector("title");

            let filteredNews;
            switch(newsCategory) {
                case "all-news":
                    pageTitle.textContent = "All News";
                    filteredNews = result;
                    
                    break;
                case "football":
                    pageTitle.textContent = "Football News";
                    console.log(newsCategory);
                    filteredNews = filterNewsByCategory(result, "football");
                    break;
                case "basketball":
                    pageTitle.textContent = "Basketball News";
                    console.log(newsCategory);
                    filteredNews = filterNewsByCategory(result, "basketball");
                    break;
                // default:
                //     filteredNews = result;                
            }
            renderNewsList(mainSectionAllNews, filteredNews);
        }
    }
    catch (error) {
        console.error(`Error occured:`, error);
    }
}
fetchAllNews();

function filterNewsByCategory(newsList, newsCategory) {
    return newsList.filter(news => news.category.toLowerCase() === newsCategory);
    
}

function createNewsItem(newsObject) {
    let newsItem = `
    <article class="news-item">
        <img src="${newsObject.imageUrl}" alt="${newsObject.imageAlt}">
        <div class="news-text">
            <h3><a href="news-story.html?id=${newsObject.id}">${newsObject.title}</a></h3>
            <p><span>${newsObject.category}:</span><span>${newsObject.location}.</span><span> ${newsObject.date}</span></p>
            <p>
                ${newsObject.newsIntro}
            </p>
        </div>
    </article> `;
    return newsItem;
}

function renderNewsList(newsContainer, newsArray) {
    newsContainer.innerHTML = "";
    let newsList = newsArray.map(newsObject => {
        return createNewsItem(newsObject);
    });
    newsContainer.innerHTML = newsList.join("");
}















// const newsObject = {
//     id: 1,
//     category: "Football",
//     title: "Gabriel Martinelli Set for Saudi Switch As Pressure Mounts for Attacking Reinforcements",
//     titleLink: "news-story.html?id=1",
//     date: "25 Aug 2026",
//     location: "London, UK",
//     imageUrl: "images/football/gabriel-martineli.png",
//     imageAlt: "Gabriel Martineli",
//     newsIntro: "Mikel Arteta is set to facilitate a record-breaking departure as the Brazilian winger nears a blockbuster move to Al Hilal, ending a seven-year spell in North London.",
//     newsStory: ""
// }


// mainSectionAllNews
// function createNewsItem(newsObject) {
//     let article = document.createElement("article");
//     article.classList.add("news-item");
    
//     let image = document.createElement("img");
//     image.setAttribute("src", `newsObject.imageUrl`);
//     image.setAttribute("alt", `newsObject.imageAlt`);
//     article.append(image);

//     let div = document.createElement("div");
//     div.classList.add("news-text");

// }