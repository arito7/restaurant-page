import imgLobster from '../img/image.jpg';

const home = function(doc){
    const wrapper = doc.createElement('div');
    wrapper.classList.add('content');

    const image = new Image();
    image.src = imgLobster;
    
    const restaurantName = doc.createElement('h1');
    restaurantName.textContent = 'Super Good';
    const phrase = doc.createElement('p');
    phrase.textContent = "this is a super good restaurant site";
    wrapper.appendChild(image);
    wrapper.appendChild(restaurantName);
    wrapper.appendChild(phrase);

    return wrapper;
}

export {home};