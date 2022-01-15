import {home} from './js/home';
import {header} from './js/header';
import {footer} from './js/footer';
import {contactPage} from './js/contact';
import './css/styles.css';

(()=>{
    const wrapper = document.querySelector('.container');
    
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    const body = home(document);
    const contact = contactPage(document);
    contentWrapper.appendChild(contact);
  
    wrapper.appendChild(header(document));  
    wrapper.appendChild(contentWrapper);
    wrapper.appendChild(footer(document));
})()