import { renderUserStats } from '../Dojo/dojo-utils.js';
import { fightData } from '../fightsData.js';
import { getLocalStorage } from '../loc-stor-utils.js';
import { handleStatEffect } from './handle-stat-effect.js';

//Get the fight data
const searchParams = new URLSearchParams(window.location.search);
const stringyId = searchParams.get('id');
if (typeof stringyId === 'undefined') {
    alert('Something went wrong, please go back to the dojo page');
}
const fightId = Number(searchParams.get('id'));
if (Number.isNaN(fightId) || typeof fightId !== 'number') {
    alert('Something went wrong, please go back to the dojo page');
}
const fight = fightData.find((fight) => {
    return fight.id === fightId;
});

//Get all elements
const enemyNameEl = document.querySelector('#fight-div > h3');
const promptEl = document.querySelector('#fight-div > h4');
const enemyImg = document.querySelector('#enemy-img');
const optionsDiv = document.querySelector('#options-div');
const resultsDiv = document.querySelector('#results-div');
const returnLink = document.querySelector('#return-link');
const userStatsDiv = document.querySelector('#stats-container');

//Grab form elements
const form = document.querySelector('#options-form');
const option1Text = document.querySelector('#option-1-text');
const option2Text = document.querySelector('#option-2-text');
const option3Text = document.querySelector('#option-3-text');

//Render fight data
enemyNameEl.textContent = fight.enemyName;
promptEl.textContent = fight.prompt;
enemyImg.src = fight.image;
option1Text.textContent = fight.options[0].text;
option2Text.textContent = fight.options[1].text;
option3Text.textContent = fight.options[2].text;

//Removes the hidden class from the return link
function showReturnLink() {
    returnLink.className = '';
}

//Updates the user stats in the header
function updateUserStatsDisplay() {
    const children = userStatsDiv.childNodes;
    for (const child of children) {
        userStatsDiv.removeChild(child);
    }
    userStatsDiv.appendChild(renderUserStats(getLocalStorage()));
}

//Updates stored data and shows results to user
function handleFightCompletion(resultText, hpEffect, fameEffect) {
    resultsDiv.textContent = resultText;
    handleStatEffect(hpEffect, fameEffect);
    updateUserStatsDisplay();
    showReturnLink();
}

//display stats before fight
updateUserStatsDisplay();

//Rock Paper Scissors data
const rps = ['Rock', 'Paper', 'Scissors'];
let wins = 0;
let losses = 0;

//This function calls itself recursively. It will stop
//when wins or losses reaches 3
const playRockPaperScissors = (selectedOption) => {
    //Randomly assign picks to user and enemy
    const userPlay = rps[(Math.floor(Math.random() * 3))];
    const enemyPlay = rps[(Math.floor(Math.random() * 3))];

    //Determine result of round
    let results = '';
    if (userPlay === enemyPlay) {
        results = 'It was a draw';
    } else if (
        (userPlay === 'Rock' && enemyPlay === 'Scissors') ||
        (userPlay === 'Paper' && enemyPlay === 'Rock') ||
        (userPlay === 'Scissors' && enemyPlay === 'Paper')
    ) {
        results = 'You won this round';
        wins++;
    } else {
        results = 'You lost this round';
        losses++;
    }

    //Handle the result of the round
    if (wins === 3) {
        //The user won
        const resultText = `You beat ${fight.enemyName}! You gained ${selectedOption.hpEffect} hp and ${selectedOption.fameEffect} fame.`;
        handleFightCompletion(resultText, selectedOption.hpEffect, selectedOption.fameEffect);
    } else if (losses === 3) {
        //The enemy won
        const resultText = `You lost to ${fight.enemyName}! You lost ${selectedOption.hpEffect} hp and ${selectedOption.fameEffect} fame.`;
        handleFightCompletion(resultText, selectedOption.hpEffect, selectedOption.fameEffect);
    } else {
        //No result yet, play another round
        resultsDiv.textContent = `You played ${userPlay} and ${fight.enemyName} played ${enemyPlay}. ${results}. Wins: ${wins}, Losses: ${losses}`;
        setTimeout(() => { playRockPaperScissors(selectedOption); }, 1500);
    }
};

//Starts a game of rock paper scissors
function startRockPaperScissors(selectedOption) {
    resultsDiv.textContent = `${fight.enemyName} challenges you to a game of rock, paper, scissors ... of death.`;
    setTimeout(() => { playRockPaperScissors(selectedOption); }, 1500);
}

//Handle the user selecting an option
form.addEventListener('submit', e => {
    e.preventDefault();

    //Get the data for the user selected response
    const formdata = new FormData(form);
    const selectedOptionIndex = formdata.get('option-radio');
    const selectedOption = fight.options[selectedOptionIndex];

    //Update the page to show the results of the response.
    optionsDiv.removeChild(form);
    resultsDiv.textContent = fight.options[selectedOptionIndex].resultText;
    if (selectedOption.startsFight) {
        startRockPaperScissors(selectedOption);
    } else {
        const resultText = `Effect on hp: ${selectedOption.hpEffect}, Effect on fame: ${selectedOption.fameEffect}`;
        handleFightCompletion(resultText, selectedOption.hpEffect, selectedOption.fameEffect);
    }
});
