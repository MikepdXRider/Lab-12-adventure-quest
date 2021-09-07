import { getLocalStorage } from '../loc-stor-utils.js';
import { fightData } from '../fightsData.js';
import { userFighterData } from './user-fighters-data.js';
import { deadFameStrings, aliveFameStrings, hpStrings } from './result-strings.js';

const userData = getLocalStorage();


export function handleHpResults(hp){
    if (hp <= 0) return 'dead';
    if (hp > 20) return 'healthy';
    return 'frail';
}

export function handleFameResults(fame){
    if (fame <= 10) return 'nobody';
    if (fame > 20) return 'famous';
    return 'respected';
}

export function createResultsString(userData){
    const hp = userData.hp;
    const fame = userData.fame;
    
    const healthStatus = handleHpResults(hp);
    const fameStatus = handleFameResults(fame);
    
    if (handleHpResults === 'dead'){
        return `${hpStrings[healthStatus]} ${deadFameStrings[fameStatus]}`;
    }
    
    return `${hpStrings[healthStatus]} ${aliveFameStrings[fameStatus]}`;
}


export function createEncounterResults(userData){
    
    const encounters = userData.encounteredEnemyIds;
    
    const encounteredEnemyObjAcc = [];
    
    fightData.forEach(item => {
        const didUserEncounter = encounters.includes(item.id);
        if (didUserEncounter) {
            encounteredEnemyObjAcc.push(item.enemyName);
        }
    });
    
    let finalString = 'You encountered ';
    const stringOfEnemyNames = encounteredEnemyObjAcc.join(', ');
    finalString += stringOfEnemyNames;
    finalString += '.';

    return finalString;
}


export function findUserFighterImg(userData){
    const userFighterClass = userData.class;
    
    const userFighter = userFighterData.find(item => {
        if (item.name === userFighterClass){
            return item;
        }
    });
    
    return userFighter.img;
}

// Should convert into a pure function. Perhaps it returns an array of the elements, which can be appendeds in results.js
export function renderResultsPage(elDOM){
    const userName = document.createElement('h1');
    const elImg = document.createElement('img');
    const elH3 = document.createElement('h3');
    const elButton = document.createElement('button');
    
    const resultsText = `${createEncounterResults(userData)} ${createResultsString(userData)}`;
    
    userName.textContent = userData.name;
    elImg.src = findUserFighterImg(userData);
    elH3.textContent = resultsText;
    elButton.textContent = 'Make a new character';
    
    elButton.addEventListener('click', () => {
        window.location = '../index.html';
    });
    
    elDOM.append(userName, elImg, elH3, elButton);
}

