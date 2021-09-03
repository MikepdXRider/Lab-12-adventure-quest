export function renderQuestLink(enemy) {
    const link = document.createElement('a');
    link.classList.add = ('quest');
    link.href = '../Fight/?id=' + enemy.id; 
    link.textContent = `The ${enemy.enemyName} quest!`;
    
    const image = document.createElement('img');
    image.src = enemy.image;
    link.append(image);
    return link;
}

export function renderCompletedQuest(enemy) {
    const spanEl = document.createElement('span');
    spanEl.classList.add = ('quest');
    spanEl.textContent = `You have completed the ${enemy.enemyName} quest!`;
    

    const image = document.createElement('img');
    image.src = enemy.image;
    spanEl.append(image);
    return spanEl;  
}