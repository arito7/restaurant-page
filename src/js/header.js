import Logo from '../img/logo.png';
import '../css/header.css';

const header = (doc) => {
    // assets
    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');
    logo.setAttribute('alt', 'logo');

    // container
    const container = doc.createElement('header');
    container.classList.add('header');

    // create children
    const name = doc.createElement('h1');
    name.textContent = 'Delicious Name';
    name.classList.add('title');

    const list = doc.createElement('ul');
    list.classList.add('test');
    const menuItems = ['Home', 'Menu', 'Contact'];
    for (let i of menuItems){
        const li = doc.createElement('li');
        const a = doc.createElement('a');
        a.textContent = i;
        a.setAttribute('href', '#');
        li.appendChild(a);
        list.appendChild(li);
    }
    
    // append
    container.appendChild(logo);
    container.appendChild(name);
    container.appendChild(list);

    return container;
};

export {header};