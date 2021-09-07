import { renderUserStats } from '../Dojo/dojo-utils.js';
import { fightData } from '../fightsData.js';
import { getLocalStorage } from '../loc-stor-utils.js';
import { determineRPSResult, getRandomRPSPlay, getStringForRPSResult, updateRPSGameData, handleStatEffect } from './fight-utils.js';

//Get the fight data
const searchParams = new URLSearchParams(window.location.search);
const stringyId = searchParams.get('id');
if (stringyId === null) {
    alert('Something went wrong, please go back to the dojo page');
}
const fightId = Number(searchParams.get('id'));
if (Number.isNaN(fightId) || typeof fightId !== 'number') {
    alert('Something went wrong, please go back to the dojo page');
}
const fight = fightData.find((fight) => {
    return fight.id === fightId;
});

//Grab all elements
const enemyNameEl = document.querySelector('#fight-div > h3');
const promptEl = document.querySelector('#fight-div > h4');
const enemyImg = document.querySelector('#enemy-img');
const optionsDiv = document.querySelector('#options-div');
const resultsDiv = document.querySelector('#results-div');
const returnLink = document.querySelector('#return-link');
const userStatsDiv = document.querySelector('#stats-container');
const rpsDiv = document.querySelector('#rps-div');

//Grab fight options form elements
const optionsForm = document.querySelector('#options-form');
const option1Text = document.querySelector('#option-1-text');
const option2Text = document.querySelector('#option-2-text');
const option3Text = document.querySelector('#option-3-text');

//Grab rock paper scissors form
const rpsForm = document.querySelector('#rps-form');

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
    rpsDiv.className = 'hidden';
    showReturnLink();
}

//display stats before fight
updateUserStatsDisplay();

//**STATE DATA**
//Rock Paper Scissors data
let rpsGameData = {
    wins: 0,
    losses: 0
};
//the response to the fighter that the user selected.
let selectedResponse;
//**END STATE DATA**

//This function calls itself recursively. It will stop
//when wins or losses reaches 3
function playRockPaperScissorsRound(selectedObject) {
    //Randomly assign picks to user and enemy
    const userPlay = selectedObject;
    const enemyPlay = getRandomRPSPlay();

    //Determine result of round
    const result = determineRPSResult(userPlay, enemyPlay);
    const resultString = getStringForRPSResult(result);
    rpsGameData = updateRPSGameData(rpsGameData, result);

    //Handle the result of the round
    if (rpsGameData.wins === 3) {
        //The user won
        const resultText = `You beat ${fight.enemyName}! You gained ${selectedResponse.hpEffect} hp and ${selectedResponse.fameEffect} fame.`;
        handleFightCompletion(resultText, selectedResponse.hpEffect, selectedResponse.fameEffect);
    } else if (rpsGameData.losses === 3) {
        //The enemy won
        const resultText = `You lost to ${fight.enemyName}! You lost ${selectedResponse.hpEffect} hp and ${selectedResponse.fameEffect} fame.`;
        handleFightCompletion(resultText, selectedResponse.hpEffect, selectedResponse.fameEffect);
    } else {
        //The game isn't done, play another round
        resultsDiv.textContent = `You played ${userPlay} and ${fight.enemyName} played ${enemyPlay}. ${resultString}. Wins: ${rpsGameData.wins}, Losses: ${rpsGameData.losses}`;
    }
}

//Starts a game of rock paper scissors
function startRockPaperScissors() {
    resultsDiv.textContent = `${fight.enemyName} challenges you to a game of rock, paper, scissors. Choose your move carefully:`;
    rpsDiv.className = ''; //show the game by removing the hidden class.
}

//Handle the user selecting a response to the fighter
optionsForm.addEventListener('submit', e => {
    e.preventDefault();

    //Get the data for the user selected response
    const formdata = new FormData(optionsForm);
    const selectedOptionIndex = formdata.get('option-radio');
    selectedResponse = fight.options[selectedOptionIndex];

    //Update the page to show the results of the response.
    optionsDiv.className = 'hidden';
    let resultText = fight.options[selectedOptionIndex].resultText;
    resultsDiv.textContent = resultText;
    if (selectedResponse.startsFight) {
        startRockPaperScissors(selectedResponse);
    } else {
        resultText = resultText + ` Effect on hp: ${selectedResponse.hpEffect}, effect on fame: ${selectedResponse.fameEffect}`;
        handleFightCompletion(resultText, selectedResponse.hpEffect, selectedResponse.fameEffect);
    }
});

//Handle the user clicking the choose button for rps
rpsForm.addEventListener('submit', e => {
    e.preventDefault();

    //Get the data for the user selected rps object.
    const formData = new FormData(rpsForm);
    const selectedObject = formData.get('rps-radio');
    //Update the rps game
    playRockPaperScissorsRound(selectedObject);
});
