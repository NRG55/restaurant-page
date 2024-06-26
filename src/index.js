import renderWebsite from "./website";
import renderMenu from "./menu";
import renderAbout from "./about";


const buttonHome = document.querySelector('.button-home');
const buttonMenu = document.querySelector('.button-menu');
const buttonAbout = document.querySelector('.button-about');
const content = document.querySelector('#content');

renderWebsite();

buttonHome.addEventListener('click', () => {
    if (content.firstChild) {
        content.removeChild(content.firstChild);
    };
    content.append(renderWebsite());
    console.log(content)
});

buttonMenu.addEventListener('click', () => {
    if (content.firstChild) {
        content.removeChild(content.firstChild);
    };
    content.append(renderMenu());
    console.log(content)
});

buttonAbout.addEventListener('click', () => {
    if (content.firstChild) {
        content.removeChild(content.firstChild);
    };
    content.append(renderAbout());
    console.log(content)
});




