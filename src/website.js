import renderHome from "./home.js";

export default function renderWebsite() {
    const content = document.querySelector('#content');   

    return content.appendChild(renderHome());  
}



