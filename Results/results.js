import { getLocalStorage } from '../loc-stor-utils.js';
import { renderResultsPage } from './results-utils.js';


window.addEventListener('load', () => {
    const userData = getLocalStorage();
    const elSection = document.querySelector('.main-section');
    
    const generatedHTMLArr = renderResultsPage(userData);

    for (let item of generatedHTMLArr) { //eslint-disable-line
        elSection.append(item);
    }
});
