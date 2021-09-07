
import { fightData } from '../fightsData.js';
import { getLocalStorage, setLocalStorage } from '../loc-stor-utils.js';
// import { userFighterData } from '../Results/user-fighters-data.js';
import { renderCompletedQuest, renderQuestLink, renderUserStats } from './dojo-utils.js';
import { findUserFighterImg } from '../Results/results-utils.js';


const user = getLocalStorage();
const userPic = document.createElement('img');
const header = document.querySelector('header');
const enemiesDiv = document.getElementById('enemies');
const userProfile = document.getElementById('userprofile');
userProfile.append(renderUserStats(user));

console.log(user.class);
userPic.src = findUserFighterImg();


header.prepend(userPic);
if (user.hp < 1 || user.encounteredEnemyIds.length === 3) {
    window.location = '../Results/index.html';
}

for (let enemy of fightData) { //eslint-disable-line
    if (user.encounteredEnemyIds.includes(enemy.id)) {

        const spanDisplay = renderCompletedQuest(enemy);
        enemiesDiv.append(spanDisplay);
    }
    else {
        const linkDisplay = renderQuestLink(enemy);
        enemiesDiv.append(linkDisplay); 
        linkDisplay.addEventListener('click', () => {
            window.location = '../Fight/?id=' + enemy.id;
            user.encounteredEnemyIds.push(enemy.id);
            setLocalStorage(user);
        });
    }
}


