import { getLocalStorage, setLocalStorage } from '../loc-stor-utils.js';

export const WIN = 1;
export const DRAW = 0;
export const LOSS = -1;
const resultStrings = ['You lost this round', 'It was a draw', 'You won this round'];
const rps = ['Rock', 'Paper', 'Scissors'];

//Determines if the user won, lost or if it was a draw.
//Returns the constants WIN, DRAW or LOSS.
export function determineRPSResult(userPlay, enemyPlay) {
    if (userPlay === enemyPlay) return DRAW;
    if ((userPlay === 'Rock' && enemyPlay === 'Scissors') ||
            (userPlay === 'Paper' && enemyPlay === 'Rock') ||
            (userPlay === 'Scissors' && enemyPlay === 'Paper')) {
        return WIN;
    }
    //It wasn't a draw or win, so it must be a loss.
    return LOSS;
} 

//Returns 'You lost this round', 'It was a draw' or 'You won this round' based on the provided result.
export function getStringForRPSResult(result) {
    if (result < -1 || result > 1 || Math.round(result) !== result) throw 'result argument should be WIN, DRAW or LOSS constants';
    return resultStrings[result + 1];
}

//Returns a new gameData object that has be updated based on the result.
export function updateRPSGameData(gameData, result) {
    if (result === WIN) {
        return {
            wins: gameData.wins + 1,
            losses: gameData.losses
        };
    }
    if (result === LOSS) {
        return {
            wins: gameData.wins,
            losses: gameData.losses + 1
        };
    }
    return {
        wins: gameData.wins,
        losses: gameData.losses
    };
}

//Returns 'Rock', 'Paper' or 'Scissors'.
export function getRandomRPSPlay() {
    return rps[(Math.floor(Math.random() * 3))];
}

//Updates the users stats in local storage.
export function handleStatEffect(hp, fame) {
    const retrievedStorage = getLocalStorage();

    retrievedStorage.hp += hp;
    retrievedStorage.fame += fame;

    setLocalStorage(retrievedStorage);
}
