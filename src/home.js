export default function () {
    const welcomeText = document.createElement('h1');
    welcomeText.textContent = "Welcome to my restaurant!";

    const homeInfo = document.createElement('div');
    const homeImage = new Image();
    homeImage.src = '';
    const homeDescription = document.createElement('p');
    homeDescription.textContent = 'My restaurant is the best of the best restaurants in the village! :}';
    homeInfo.append(homeImage, homeDescription);   
    return homeInfo;
}

