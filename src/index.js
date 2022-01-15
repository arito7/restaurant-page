import {home} from './js/home';
import {header} from './js/header';
import {footer} from './js/footer';
import {contactPage} from './js/contact';
import { menupage } from './js/menu';
import './css/styles.css';

(()=>{
    const wrapper = document.querySelector('.container');
    
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    const homePage = home(document);
    const contact = contactPage(document);
    const menu = menupage(document);
    // set default page
    contentWrapper.appendChild(menu);
    
    wrapper.appendChild(header(document, navListener));  
    wrapper.appendChild(contentWrapper);
    wrapper.appendChild(footer(document));

    function navListener(e){
        switch(e.target.textContent){
            case 'Home':
                swap(contentWrapper, homePage);
                break;
            case 'Menu':
                swap(contentWrapper, menu);
                break;
            case 'Contact':
                swap(contentWrapper, contact);
                break;
        }
    }
    function swap(parent, n){
        parent.removeChild(parent.firstChild);
        parent.appendChild(n);
    }
})()