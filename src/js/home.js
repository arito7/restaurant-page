import ImgLobster from '../img/image.jpg';
import ImgBacon from '../img/bacon.jpg';
import ImgPancakes from '../img/pancakes.jpg';
import ImgPasta from '../img/pasta.jpg';

import '../css/home.css';

const home = function(doc){
    const wrapper = doc.createElement('div');
    wrapper.classList.add('content');

    // wrapper for images
    const imgWrapper = doc.createElement('div');
    imgWrapper.classList.add('img-container');

    const imgLobster = new Image();
    imgLobster.src = ImgLobster;
    const imgBacon = new Image();
    imgBacon.src = ImgBacon;
    const imgPancakes = new Image();
    imgPancakes.src = ImgPancakes;
    const imgPasta = new Image();
    imgPasta.src = ImgPasta;
    const images = [imgLobster, imgBacon, imgPancakes, imgPasta];
    for (let i of images){
        imgWrapper.appendChild(i);
    }
    
    const restaurantName = doc.createElement('h1');
    restaurantName.textContent = 'Super Good';
    restaurantName.classList.add('title');
    const phrase = doc.createElement('p');
    phrase.textContent = "Check out these delicious looking foods we have!!";
    phrase.classList.add('phrase');
    // hours
    const hours = doc.createElement('div');
    hours.classList.add('hours')
    const hoursTitle = doc.createElement('h2');
    hoursTitle.textContent = 'Business Hours';
    hours.appendChild(hoursTitle);

    const hoursTable = {
        Sunday: '8:00 - 20:00',
        Monday: '8:00 - 20:00',
        Tuesday: '8:00 - 20:00',
        Wednesday: '8:00 - 20:00',
        Friday: '8:00 - 20:00',
        Saturday: '8:00 - 20:00',
    };
    for (let val in hoursTable){
        const dayTime = doc.createElement('p');
        dayTime.textContent = `${val}  ${hoursTable[val]}`;
        hours.appendChild(dayTime);
    }
    
    wrapper.appendChild(restaurantName);
    wrapper.appendChild(phrase);
    wrapper.appendChild(imgWrapper);
    wrapper.appendChild(hours);

    return wrapper;
}

export {home};