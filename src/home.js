export default function () {
    const header = document.createElement('h1');
    header.innerHTML = "Welcome to my restaurant!";

    const homeInfo = document.createElement('div');
    const homeImage = new Image();
    homeImage.src = '';
    const homeDescription = document.createElement('p');
    homeDescription.textContent = 'My restaurant is the best of the best restaurants in the village! :}';
    homeInfo.append(header, homeImage, homeDescription);   
    return homeInfo;
}

