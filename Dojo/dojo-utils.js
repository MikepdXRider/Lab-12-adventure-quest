import { fightData } from '../fightsData.js';


export function renderQuestLink(enemy) {
    const link = document.createElement('button');
    link.classList.add = ('questbutton');
    link.href = '../Fight/?id=' + enemy.id; 
    link.textContent = `Enter the ${enemy.enemyName} quest!`;

    
    const image = document.createElement('img');
    image.src = enemy.image;
    link.append(image);
    return link;
}

export function renderCompletedQuest(enemy) {
    //remove link and change to span after quest completed 
    const spanEl = document.createElement('span');
    spanEl.classList.add = ('quest');
    spanEl.textContent = `${enemy.enemyName} quest completed.`;
    //keep image 
    const image = document.createElement('img');
    image.src = enemy.image;
    spanEl.append(image);
    return spanEl;  
}

export function renderUserStats(userStats) {
    //create userstats divs when function is called
    const containerDiv = document.createElement('div');
    containerDiv.className = 'stats-div';
    const nameDiv = document.createElement('div');
    const classDiv = document.createElement('div');
    const hpDiv = document.createElement('div');
    const fameDiv = document.createElement('div');
    const encounteredDiv = document.createElement('div');
    //add textcontent stats to rendered divs
    nameDiv.textContent = `Name:  ${userStats.name}`;
    classDiv.textContent = `Class:  ${userStats.class}`;
    hpDiv.textContent = `Hp:  ${userStats.hp}`;
    fameDiv.textContent = `Fame:  ${userStats.hp}`;
    const encounteredArr = encounteredByName(fightData, userStats);
    encounteredDiv.textContent = `Encountered:  ${encounteredArr}`;
    //append userstats to container
    containerDiv.append(nameDiv, classDiv, hpDiv, fameDiv, encounteredDiv);
    return containerDiv;
}


export function encounteredByName(fightData, userStats) {
    const encounteredArray = [];
    for (let enemy of fightData) {
        for (let id of userStats.encounteredEnemyIds) {
            if (id === enemy.id) {
                encounteredArray.push(enemy.enemyName);
            }
        }
         
    }
    
    return encounteredArray;
}

