import { fightData } from '../fightsData.js';

// const enemyNameArr = [];
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
    const spanEl = document.createElement('span');
    spanEl.classList.add = ('quest');
    spanEl.textContent = `${enemy.enemyName} quest completed.`;
    
    const image = document.createElement('img');
    image.src = enemy.image;
    spanEl.append(image);
    return spanEl;  
}

export function renderUserStats(userStats) {
    const containerDiv = document.createElement('div');
    containerDiv.className = 'stats-div';
    const nameDiv = document.createElement('div');
    const classDiv = document.createElement('div');
    const hpDiv = document.createElement('div');
    const fameDiv = document.createElement('div');
    const encounteredDiv = document.createElement('div');

    nameDiv.textContent = `Name: ${userStats.name}`;
    classDiv.textContent = `Class: ${userStats.class}`;
    hpDiv.textContent = `Hp: ${userStats.hp}`;
    fameDiv.textContent = `Fame: ${userStats.hp}`;
    //const enemyName = findNameById(fightData, userStats);
    //enemyNameArr.push(enemyName);
    const encounteredArr = encounteredByName(fightData, userStats);
    encounteredDiv.textContent = `Encountered: ${encounteredArr}`;

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
    console.log(encounteredArray);
    return encounteredArray;
}

//