import { fightData } from '../fightsData.js';
import { handleStatEffect } from './handle-stat-effect.js';

//get the fight data
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

//get all elements
const enemyNameEl = document.querySelector('#fight-div > h3');
const promptEl = document.querySelector('#fight-div > h4');
const enemyImg = document.querySelector('#enemy-img');
const optionsDiv = document.querySelector('#options-div');
const resultsDiv = document.querySelector('#results-div');
const returnLink = document.querySelector('#return-link');
//grab form elements
const form = document.querySelector('#options-form');
const option1Text = document.querySelector('#option-1-text');
const option2Text = document.querySelector('#option-2-text');
const option3Text = document.querySelector('#option-3-text');

//render fight data
enemyNameEl.textContent = fight.enemyName;
promptEl.textContent = fight.prompt;
enemyImg.src = fight.image;
option1Text.textContent = fight.options[0].text;
option2Text.textContent = fight.options[1].text;
option3Text.textContent = fight.options[2].text;

function showReturnLink() {
    returnLink.className = '';
}

//lazy rps game
const rps = ['Rock', 'Paper', 'Scissors'];
let wins = 0;
let losses = 0;

const playRoundOfRPS = (selectedOption) => {
    const userPlay = rps[(Math.floor(Math.random() * 3))];
    const enemyPlay = rps[(Math.floor(Math.random() * 3))];
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
    if (wins === 3) {
        resultsDiv.textContent = `You beat ${fight.enemyName}! You gained ${selectedOption.hpEffect} hp and ${selectedOption.fameEffect} fame.`;
        showReturnLink();
        handleStatEffect(selectedOption.hpEffect, selectedOption.fameEffect);
    } else if (losses === 3) {
        resultsDiv.textContent = `You lost to ${fight.enemyName}! You lost ${selectedOption.hpEffect} hp and ${selectedOption.fameEffect} fame.`;
        showReturnLink();
        handleStatEffect((-1 * selectedOption.hpEffect), (-1 * selectedOption.fameEffect));
    } else {
        resultsDiv.textContent = `You played ${userPlay} and ${fight.enemyName} played ${enemyPlay}. ${results}. Wins: ${wins}, Losses: ${losses}`;
        setTimeout(() => { playRoundOfRPS(selectedOption); }, 1500);
    }
};

function playRockPaperScissors(selectedOption) {
    resultsDiv.textContent = `${fight.enemyName} challenges you to a game of rock, paper, scissors ... of death.`;
    setTimeout(() => { playRoundOfRPS(selectedOption); }, 1500);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const formdata = new FormData(form);
    const selectedOptionIndex = formdata.get('option-radio');
    const selectedOption = fight.options[selectedOptionIndex];
    optionsDiv.removeChild(form);
    resultsDiv.textContent = fight.options[selectedOptionIndex].resultText;
    if (selectedOption.startsFight) {
        playRockPaperScissors(selectedOption);
    } else {
        resultsDiv.textContent = `hp += ${selectedOption.hpEffect}, fame += ${selectedOption.fameEffect}`;
        handleStatEffect(selectedOption.hpEffect, selectedOption.fameEffect);
        showReturnLink();
    }
});
