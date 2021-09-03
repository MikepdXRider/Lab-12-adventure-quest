
import { fightData } from '../fightsData.js';
import { getLocalStorage, setLocalStorage } from '../loc-stor-utils.js';
import { renderCompletedQuest, renderQuestLink, renderUserStats } from './dojo-utils.js';


const user = getLocalStorage();
const enemiesDiv = document.getElementById('enemies');

const userProfile = document.getElementById('userprofile');
userProfile.append(renderUserStats(user));


if (user.hp < 1 || user.encounteredEnemyIds.length === 3) {
    window.location = '../Results/index.html';
}

for (const enemy of fightData) {
    if (user.encounteredEnemyIds.includes(enemy.id)) {
        const spanDisplay = renderCompletedQuest(enemy);
        enemiesDiv.append(spanDisplay);
    }
    else {
        const linkDisplay = renderQuestLink(enemy);
        enemiesDiv.append(linkDisplay); 
        linkDisplay.addEventListener('click', () => {
            user.encounteredEnemyIds.push(enemy.id);
            setLocalStorage(user);
        });
    }
}


