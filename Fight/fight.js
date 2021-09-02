import { fightData } from '../fightsData.js';

//get the fight data
const searchParams = new URLSearchParams(window.location.search);
const fightId = Number(searchParams.get('id'));
if (Number.isNaN(fightId) || typeof fightId !== 'number') {
    alert('Something went wrong, please go back to the dojo page');
}
const fight = fightData.find((fight) => {
    return fight.id === fightId;
});

//get all elements
const enemyNameEl = document.querySelector('#fight-div > h3');
const promptEl = document.querySelector('#fight-div > h4');
const enemyImg = document.querySelector('#enemy-img');
const optionsDiv = document.querySelector('#options-div');
const resultsDiv = document.querySelector('#results-div');
//grab form elements
const form = document.querySelector('#options-form');
const option1Text = document.querySelector('#option-1-text');
const option2Text = document.querySelector('#option-2-text');
const option3Text = document.querySelector('#option-3-text');

enemyNameEl.textContent = fight.enemyName;
promptEl.textContent = fight.prompt;
enemyImg.src = fight.image;
option1Text.textContent = fight.options[0].text;
option2Text.textContent = fight.options[1].text;
option3Text.textContent = fight.options[2].text;

form.addEventListener('submit', e => {
    e.preventDefault();
    const formdata = new FormData(form);
    let selectedOptionIndex = formdata.get('option-radio');
    console.log(selectedOptionIndex);
    console.log(fight.options[selectedOptionIndex].resultText);
    optionsDiv.removeChild(form);
    resultsDiv.textContent = fight.options[selectedOptionIndex].resultText;
});