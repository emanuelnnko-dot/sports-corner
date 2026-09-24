// alert("Yes!");
const mainSection = document.getElementById("main");
console.log(mainSection);
const API_URL = "http://localhost:5000/api/news";

async function fetchAllNews() {
    try{
        const response = await fetch(`${API_URL}`);
        const result = await response.json();
        if (!response.ok) {
            // console.log(result);
            throw new Error(result || "Failed to retrieve products");
        } else {
            console.log(result);

            let newsCategoryCollections = "";
            console.log(newsCategoryCollections);
            // // newsCategoryCollections = createNewsCategoryCollection(result, "football", newsCategoryCollections);
            // newsCategoryCollections = createNewsCategoryCollection(result, "boxing", newsCategoryCollections);
            // newsCategoryCollections = createNewsCategoryCollection(result, "basketball", newsCategoryCollections);
            // console.log(newsCategoryCollections);
            // mainSection.innerHTML = "";
            // mainSection.innerHTML = newsCategoryCollections;

            renderNewsCategoryCollections(result, newsCategoryCollections);

        }
    }
    catch (error) {
        console.error(`Error occured:`, error);
    }
}

fetchAllNews();

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


function createNewsCategoryCollection(allNews, categoryName, newsCategoryCollections) {
    let filteredCategoryNews = allNews.filter(news => news.category.toLowerCase() === categoryName);
    if (filteredCategoryNews[0]) {

        // Create outer container that hold news cards 
        newsCategoryCollections += `
                <section class="news-collection">
                    <div class="heading">
                        <div>
                            <h2>${filteredCategoryNews[0].category}</h2>
                        </div>
                        <div>
                            <p class="read-more">Read more </p>
                        </div>
                    </div>`;
        for (i = 0; i < 4; i++) {
            if (i === 0) {
                if (!filteredCategoryNews[i]) {continue;}
                // Create big news
                newsCategoryCollections += `
                <div class="news-collection-big-news">
                        <img src="${filteredCategoryNews[i].imageUrl}" alt="${filteredCategoryNews[i].imageAlt}">
                        <h3><a href="news-story.html?id=${filteredCategoryNews[i].id}">${filteredCategoryNews[i].title}</a></h3>
                        <p><span>${filteredCategoryNews[i].category}:</span><span> ${filteredCategoryNews[i].location}.</span><span> ${filteredCategoryNews[i].date}</span></p>
                        <p>${filteredCategoryNews[i].newsIntro}</p>
                    </div>
                    <div class="news-collection-small-news"> `;
            } else {
                if (!filteredCategoryNews[i]) {continue;}
                // Create small news
                newsCategoryCollections += `
                        <div class="cards">
                            <img class="news-collection-small-image" src="${filteredCategoryNews[i].imageUrl}" alt="${filteredCategoryNews[i].imageAlt}">
                            <h4><a href="news-story.html?id=${filteredCategoryNews[i].id}">${filteredCategoryNews[i].title}</a></h4>
                        </div>`;
            }
        }
        newsCategoryCollections += `
                    </div>
                </section>`;
    }    
    return newsCategoryCollections;
}

function renderNewsCategoryCollections(allNews, newsCategoryCollections) {
    const newsCategories = ["football", "basketball", "boxing", "tennis", "golf"];
    newsCategories.forEach(category => {
            newsCategoryCollections = createNewsCategoryCollection(allNews, category, newsCategoryCollections);
    });
    mainSection.innerHTML = "";
    mainSection.innerHTML = newsCategoryCollections;
    // console.log(newsCategoryCollections);
}



// Try to use: window.addEventListener(){};
// let moreNewsInCategory = document.querySelectorAll('.read-more');
// moreNewsInCategory.style.color = "blue";

