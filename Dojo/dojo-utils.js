

export function renderQuestLink(enemy) {
    const link = document.createElement('a');
    link.classList.add = ('quest');
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
    encounteredDiv.textContent = `Encountered: ${userStats.encounteredEnemyIds}`;

    containerDiv.append(nameDiv, classDiv, hpDiv, fameDiv, encounteredDiv);
    return containerDiv;
}
