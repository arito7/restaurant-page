import {home} from './js/home';
import {header} from './js/header';
import {footer} from './js/footer';
import {contactPage} from './js/contact';
import './css/styles.css';

(()=>{
    const wrapper = document.querySelector('.container');
    
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    const homePage = home(document);
    const contact = contactPage(document);
    contentWrapper.appendChild(contact);
  
    wrapper.appendChild(header(document, (li)=>{
        switch(li.target.textContent){
            case 'Home':
                swap(contentWrapper, homePage);
                break;
            case 'Menu':
                break;
            case 'Contact':
                swap(contentWrapper, contact);
                break;
        }
    }));  
    wrapper.appendChild(contentWrapper);
    wrapper.appendChild(footer(document));

    function swap(parent, n){
        contentWrapper.removeChild(contentWrapper.firstChild);
        contentWrapper.appendChild(n);
    }
})()