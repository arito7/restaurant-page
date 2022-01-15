import '../css/menu.css';
import ImgBacon from '../img/bacon.jpg';
import ImgPasta from '../img/pasta.jpg';
import ImgSalad from '../img/salad.jpg';
import ImgPancakes from '../img/pancakes.jpg';

const menuItem = (doc, name, src) => {
    const container = doc.createElement('div');
    container.classList.add('menu-item');
    
    const img = new Image();
    img.classList.add('menu-item-img');
    img.src = src;

    const title = doc.createElement('h3');
    title.classList.add('menu-item-title');
    title.textContent = name;

    container.appendChild(img);
    container.appendChild(title);

    return container;
}

const menupage = (doc) => {
    const container = doc.createElement('div');
    container.classList.add('menu-container');

    container.appendChild(menuItem(doc, 'Baconista ... $79.79', ImgBacon));
    container.appendChild(menuItem(doc, "Masta's Pasta ... $99.99", ImgPasta));
    container.appendChild(menuItem(doc, 'Salad on Vegetables ... $199.99', ImgSalad));
    container.appendChild(menuItem(doc, 'Pancake Tower ... $9.99', ImgPancakes));
    return container;
}

export {menupage};