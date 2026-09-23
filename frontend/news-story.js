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
            pageTitle.textContent = result[0].title;

            // let filteredNews;
            // switch(newsCategory) {
            //     case "all-news":
            //         mainSectionSingleNews
            //         filteredNews = result;
                    
            //         break;
            //     case "football":
            //         pageTitle.textContent = "Football News";
            //         console.log(newsCategory);
            //         filteredNews = filterNewsByCategory(result, "football");
            //         break;
            //     case "basketball":
            //         pageTitle.textContent = "Basketball News";
            //         console.log(newsCategory);
            //         filteredNews = filterNewsByCategory(result, "basketball");
            //         break;
            //     // default:
            //     //     filteredNews = result;                
            // }

            renderNewsList(mainSectionSingleNews, result);
            // displaySingleNews(mainSectionSingleNews, result);
        }
    }
    catch (error) {
        console.error(`Error occured:`, error);
    }
}
fetchSingleNews();