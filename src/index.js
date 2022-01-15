import {home} from './js/home';
import {header} from './js/header';
import {footer} from './js/footer';
import './css/styles.css';

(()=>{
    const wrapper = document.querySelector('.container');
    wrapper.appendChild(header(document));
    wrapper.appendChild(home(document));
    wrapper.appendChild(footer(document));
})()
console.log('hello');