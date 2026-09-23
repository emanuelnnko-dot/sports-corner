const mainSectionSingleNews = document.getElementById("main-section-single-news");

const API_URL = "http://localhost:5000/api/news";

// Functionality for searching URL params ***
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const newsId = urlParams.get("id");
    console.log(newsId);

    async function fetchSingleNews() {
    try{
        const response = await fetch(`${API_URL}/${newsId}`);
        const result = await response.json();
        if (!response.ok) {
            // console.log(result);
            throw new Error(result || "Failed to retrieve news");
        } else {
            console.log(result);
            const pageTitle = document.querySelector("title");
            console.log(result);
            console.log(result.title);
            pageTitle.textContent = result.title;
            displaySingleNews(mainSectionSingleNews, result);
        }
    }
    catch (error) {
        console.error(`Error occured:`, error);
    }
}
fetchSingleNews();

{/* <img src=${newsObject.imageUrl} alt=${newsObject.imageAlt}>
        <div class="news-text">
            <h3><a href=${newsObject.titleLink}>${newsObject.title}</a></h3>
            <p><span>${newsObject.category}:</span><span>${newsObject.location}.</span><span> ${newsObject.date}</span></p>
            <p>
                ${newsObject.newsIntro}
            </p> */}

function displaySingleNews(newsContainer, result) {
    mainSectionSingleNews.innerHTML = "";
    const newsElement = `
    <article class="news-item">
    <img src="${result.imageUrl}" alt="${result.imageAlt}">
    <div class="news-text">
        <h3>${result.title}</h3>
        <p><span>${result.category}:</span><span>${result.location}.</span><span> ${result.date}</span></p>
        <p>
            ${result.newsStory}
        </p>
    </div>
    </article> `;
    mainSectionSingleNews.innerHTML = newsElement;
}












// function createNewsItem(newsObject) {
//     let newsItem = `
//     <article class="news-item">
//         <img src=${newsObject.imageUrl} alt=${newsObject.imageAlt}>
//         <div class="news-text">
//             <h3><a href=${newsObject.titleLink}>${newsObject.title}</a></h3>
//             <p><span>${newsObject.category}:</span><span>${newsObject.location}.</span><span> ${newsObject.date}</span></p>
//             <p>
//                 ${newsObject.newsIntro}
//             </p>
//         </div>
//     </article> `;
//     return newsItem;
// }

// function renderNewsList(newsContainer, newsArray) {
//     newsContainer.innerHTML = "";
//     let newsList = newsArray.map(newsObject => {
//         return createNewsItem(newsObject);
//     });
//     newsContainer.innerHTML = newsList.join("");
// }

