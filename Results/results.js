import { getLocalStorage } from '../loc-stor-utils.js';
import { fightData } from '../fightsData.js';


export function handleHealthandFameResults(){
    const userData = getLocalStorage();
    const finalHealth = userData.hp;
    const finalFame = userData.fame;

    //No hp, low fame
    if (finalHealth <= 0 && finalFame <= 10){
        return 'You died an unknown, pathetic loser';
    }
    //No finalHealth, mid finalFame
    if (finalHealth <= 0 && finalFame > 10 && finalFame <= 20){
        return 'You died in combat, but your name will not be forgotten.';
    }
    //No finalHealth, high finalFame
    if (finalHealth <= 0 && finalFame > 20){
        return 'You died fighting valiently. You will be hailed as a great warrior for many tournments to come.';
    }

    //low finalHealth, low finalFame
    if (finalHealth <= 10 && finalHealth > 0 && finalFame <= 10){
        return 'You barely survive the Dojo, but you won\'t be invited back.';
    }
    //low finalHealth, mid finalFame
    if (finalHealth <= 10 && finalHealth > 0 && finalFame <= 20){
        return 'You barely survived the Dojo, but you fought well and leave with the respect of your opponents.';
    }
    //low finalHealth, high finalFame
    if (finalHealth <= 10 && finalHealth > 0 && finalFame < 20){
        return 'You barely survived the Dojo, but you fought well and leave the people\'s champion. You can hear your name chanted throughout the region.';
    }

    //mid finalHealth, low finalFame
    if (finalHealth > 10 && finalHealth >= 20 && finalFame <= 10){
        return 'You surive the dojo with a few bumps and bruises, but you won\'t be invited back.';
    }
    //mid finalHealth, mid finalFame
    if (finalHealth > 10 && finalHealth >= 20 && finalFame <= 20){
        return 'You surive the dojo with a few bumps and bruises, but you fought well and leave with the respect of your opponents.';
    }
    //mid finalHealth, high finalFame
    if (finalHealth > 10 && finalHealth >= 20 && finalFame > 20){
        return 'You surive the dojo with a few bumps and bruises, but you fought well and leave the people\'s champion. You can hear your name chanted throughout the region.';
    }

    //high finalHealth, low finalFame
    if (finalHealth > 20 && finalFame <= 10){
        return 'You exit the dojo as you entered, but you won\'t be invited back.';
    }
    //high finalHealth, mid finalFame
    if (finalHealth > 20 && finalFame > 10 && finalFame <= 20){
        return 'You exit the dojo as you entered, but you fought well and leave with the respect of your opponents.';
    }
    //high finalHealth, high finalFame
    if (finalHealth > 20 && finalFame > 20){
        return 'You exit the dojo as you entered, you fought well and leave a true champion. You can hear your name chanted throughout the region.';
    }
}


export function handleEncounterResults(){
    const userData = getLocalStorage();
    const encounters = userData.encounteredEnemyIds;
    
    const encounteredEnemyObjAcc = [];
    const numberOfEncounters = encounteredEnemyObjAcc.length;

    fightData.forEach(item => {
        const didUserEncounter = encounters.includes(item.id);
        if (didUserEncounter) {
            encounteredEnemyObjAcc.push(item);
        }
    });

    if (numberOfEncounters === 1) {
        return `You fought ${encounteredEnemyObjAcc[0].enemyName}`;
    }

    if (numberOfEncounters === 2) {
        return `You fought ${encounteredEnemyObjAcc[0].enemyName} and ${encounteredEnemyObjAcc[1].enemyName}`;
    }

    if (numberOfEncounters === 3) {
        return `You fought ${encounteredEnemyObjAcc[0].enemyName}, ${encounteredEnemyObjAcc[1].enemyName}, and ${encounteredEnemyObjAcc[2].enemyName}`;
    }


}