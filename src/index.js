import {home} from './js/home';
import {header} from './js/header';
import {footer} from './js/footer';
import './css/styles.css';

(()=>{
    const wrapper = document.querySelector('.container');
    wrapper.appendChild(header(document));
    let body = home(document);
    wrapper.appendChild(body);
    // const btnTest = document.createElement('button');
    // btnTest.addEventListener('click',()=> {
    //     wrapper.removeChild(body);
    // })
    // wrapper.appendChild(btnTest);
    wrapper.appendChild(footer(document));
})()
console.log('hello');