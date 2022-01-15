import '../css/contact.css';
import GirlChef from '../img/girl-chef.jpg';

const contactCard = (doc, name, src, title, intro)=>{
    const container = doc.createElement('div');
    container.classList.add('contact-card');

    const img = new Image();
    img.src = src;
    img.classList.add('profile-img', 'left-half');

    const rightHalf = doc.createElement('div');
    rightHalf.classList.add('right-half');
    const h3name = doc.createElement('h3');
    h3name.textContent = name;

    const h4title = doc.createElement('h4');
    h4title.textContent = title;
    const pIntro = doc.createElement('p');
    pIntro.textContent = intro;

    rightHalf.appendChild(h3name);
    rightHalf.appendChild(h4title);
    rightHalf.appendChild(pIntro);

    container.appendChild(img);
    container.appendChild(rightHalf);

    return container;
}

const contactPage = (doc) => {
    const container = doc.createElement('div');
    container.classList.add('contact-container');

    const phone = doc.createElement('p');
    phone.textContent = '123-456-7890'

    const address = doc.createElement('p');
    address.textContent = '123 Super Generic Dr., Generia, AA 12345';
    const chef = contactCard(doc, 'Gordon R', GirlChef, 'Head Chef', 'Hello good people. My name is Gordon, I have about 80 years of experience in the kitchen, I have about 48 raw Michellin Stars.');
    const manager = contactCard(doc, 'Super Micro', GirlChef, 'Micro Manager', 'Hello rich people, I am the General Micro Manager at This Amazing Restaurant, I take customer complaints semi-serioiusly, but take my job very seriously.');
    
    container.appendChild(phone);
    container.appendChild(address);
    container.appendChild(chef);
    container.appendChild(manager);

    return container;
};
export {contactPage};