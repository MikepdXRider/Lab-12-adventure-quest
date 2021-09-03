
import { fightData } from '../fightsData.js';
//import { getLocalStorage } from '../loc-stor-utils.js';

//const user = getLocalStorage();
const enemiesDiv = document.getElementById('enemies');

//if (user.hp < 1 || user.encounteredEnemyIDs.length === 3) {
 //  window.location = '../Results/index.html';

//}


for (let enemy of fightData) {

   

   const link = document.createElement('a');
   link.classList.add = ('quest');
   link.href = '../Fight/?id=' + enemy.id; 
   link.textContent = enemy.enemyName;

   const image = document.createElement('img');
   image.src = enemy.image;
   link.append(image);
   enemiesDiv.append(link); 


}




