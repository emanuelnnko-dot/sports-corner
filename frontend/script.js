// alert("Yes!");

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
        }
    }
    catch (error) {
        console.error(`Error occured:`, error);
    }
}

fetchAllNews();

let moreNewsInCategory = document.querySelector('#more');
moreNewsInCategory.style.display = "none";