export default function() {
    const content = document.createElement('div');   
    const header = document.createElement('h1');

    header.innerHTML = "Menu";
    content.appendChild(header);
    content.appendChild(createMenuCard(
        "Pizza",
        "Olives, Mozarella, Tomato sauce"
    ));  
    return content;
}

function createMenuCard(name, description) {
    const menuCard = document.createElement('div');
    
    const foodImage = document.createElement('img');
    foodImage.src = "";

    const foodName = document.createElement('h2');
    foodName.innerHTML = name;

    const foodDescription = document.createElement('p');
    foodDescription.innerHTML = description;

    menuCard.appendChild(foodImage);
    menuCard.appendChild(foodName);
    menuCard.appendChild(foodDescription);

    return menuCard;
}