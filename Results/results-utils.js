import { fightData } from '../fightsData.js';
import { userFighterData } from './user-fighters-data.js';
import { deadFameStrings, aliveFameStrings, hpStrings } from './result-strings.js';


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
    
    if (healthStatus === 'dead'){
        return `${hpStrings[healthStatus]} ${deadFameStrings[fameStatus]}`;
    }

    if (healthStatus === 'healthy' && fameStatus === 'famous'){
        return `FLAWLESS VICTORY!! ${hpStrings[healthStatus]} ${aliveFameStrings[fameStatus]}`;
    }
    
    return `${hpStrings[healthStatus]} ${aliveFameStrings[fameStatus]}`;
}


export function createEncounterString(userData){
    
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


export function renderResultsPage(userData){
    const userName = document.createElement('h1');
    const elImg = document.createElement('img');
    const elDivCont = document.createElement('div');
    const elHealthP = document.createElement('p');
    const elFameP = document.createElement('p');
    const elH3 = document.createElement('h3');
    const elButton = document.createElement('button');
    
    const resultsText = `${createEncounterString(userData)} ${createResultsString(userData)}`;

    
    userName.textContent = userData.name;
    elImg.src = findUserFighterImg(userData);
    elHealthP.textContent = `Health: ${userData.hp}`;
    elFameP.textContent = `Fame: ${userData.fame}`;
    elH3.textContent = resultsText;
    elButton.textContent = 'Make a new character';

    elDivCont.classList.add('flex');
    
    elButton.addEventListener('click', () => {
        window.location = '../index.html';
    });

    elDivCont.append(elHealthP, elFameP);
    
    // console.log([userName, elImg, elDivCont, elH3, elButton]);
    return [userName, elImg, elDivCont, elH3, elButton];
}

