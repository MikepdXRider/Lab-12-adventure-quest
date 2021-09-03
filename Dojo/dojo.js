
import { fightData } from '../fightsData.js';
import { getLocalStorage, setLocalStorage } from '../loc-stor-utils.js';
import { renderCompletedQuest, renderQuestLink } from './dojo-utils.js';

const user = getLocalStorage();
const enemiesDiv = document.getElementById('enemies');


if (user.hp < 1 || user.encounteredEnemyIds.length === 3) {
    window.location = '../Results/index.html';
}

for (let enemy of fightData) {
    if (user.encounteredEnemyIds.includes(enemy.id)) {
        user.encounteredEnemyIds.push(enemy.id);
        let spanDisplay = renderCompletedQuest(enemy);
        enemiesDiv.append(spanDisplay);
    }
    else {
        let linkDisplay = renderQuestLink(enemy);
        enemiesDiv.append(linkDisplay); 
        linkDisplay.addEventListener('click', () => {
            user.encounteredEnemyIds.push(enemy.id);
            setLocalStorage(user);
        });
    }
}


