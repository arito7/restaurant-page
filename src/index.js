import {load} from './js/initload';
import {header} from './js/header';
import './css/styles.css';

(()=>{
    const wrapper = document.querySelector('.container');
    wrapper.appendChild(header(document));
    wrapper.appendChild(load(document));
})()
console.log('hello');