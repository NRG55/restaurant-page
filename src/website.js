export default function renderWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    // content.appendChild(createMain());
    // content.appendChild(createFooter());
}

function createHeader() {
    const header = document.createElement('header');

    const headerRestaurantName = document.createElement('h1');
    headerRestaurantName.textContent = "My restaurant";

    header.appendChild(headerRestaurantName);
    // header.appendChild(createHeaderNavbar());

    return header;
}

function createHeaderNavbar() {

}

function createMain() {

}

function createFooter() {

}