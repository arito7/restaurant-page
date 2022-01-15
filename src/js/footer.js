import '../css/footer.css';

const footer = (doc) => {
    const container = doc.createElement('footer');
    container.classList.add('footer');
    
    const tags = [
        `<a href='https://www.freepik.com/vectors/background'>Background vector created by pikisuperstar - www.freepik.com</a>`,
    ]
    
    const list = doc.createElement('ul');
    for (let i of tags){
        const li = doc.createElement('li');
        li.innerHTML = i;
        list.appendChild(li);
    }

    container.appendChild(list);
    console.log('footer is running')
    return container;
};

export {footer};