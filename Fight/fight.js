import { fightData } from '../fightsData.js';

//get the fight data
const searchParams = new URLSearchParams(window.location.search);
const fightId = Number(searchParams.get('id'));
if (Number.isNaN(fightId) || typeof fightId !== 'number') {
    alert('Something went wrong, please go back to the dojo page');
}
const fight = fightData.find((fight) => {
    return fight.id === fightId;
});
