import { renderResultsPage } from './results-utils.js';

window.addEventListener('load', () => {
    const elSection = document.querySelector('.main-section');
    
    renderResultsPage(elSection);
});