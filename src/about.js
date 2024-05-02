export default function () {
    const header = document.createElement('h1');
    header.innerHTML = 'About us';

    const infoCard = document.createElement('div');

    const contactPerson = document.createElement('h2');
    contactPerson.innerHTML = "My restaurant";
    
    const contactPhoneNumber = document.createElement('p');
    contactPhoneNumber.innerHTML = "Phone number: +3531234567";

    const contactEmail = document.createElement('p');
    contactEmail.innerHTML = "Email: myrestaurant@gmail.com";

    infoCard.append(contactPerson, contactPhoneNumber, contactEmail);
    return infoCard;
}