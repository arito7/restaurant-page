import Logo from '../img/logo.png';

const header = (doc) => {
    const logo = new Image();
    logo.src = Logo;
    const container = doc.createElement('div');
    container.classList.add('header');

    container.appendChild(logo);

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
    container.appendChild(list);
    return container;
};

export {header};