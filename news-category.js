const mainSectionAllNews = document.getElementById("main-section-all-news");

const API_URL = "http://localhost:5000/api/news";


const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
const newsCategory = urlParams.get("category");
console.log(newsCategory);

if(newsCategory == "all-news") {
    const allNews = document.getElementById("all-news");
    console.log(allNews);
    allNews.style.color = "rgb(125 46 255)";
    allNews.style.fontSize = "14px";
    allNews.style.fontWeight = "800";
}

// const linkHome = document.getElementById("link-home");
// console.log(linkHome);
// linkHome.style.color = "rgb(125 46 255)";
// linkHome.style.fontSize = "14px";
// linkHome.style.fontWeight = "800";

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

                    const allNews = document.getElementById("all-news");
                    console.log(allNews);
                    allNews.style.color = "rgb(125 46 255)";
                    allNews.style.fontSize = "14px";
                    allNews.style.fontWeight = "800";
                    
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

