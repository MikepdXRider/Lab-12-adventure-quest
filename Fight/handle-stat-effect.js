import { getLocalStorage, setLocalStorage } from '../loc-stor-utils.js';

export function handleStatEffect(hp, fame){
    const retrievedStorage = getLocalStorage();

    retrievedStorage.hp += hp;
    retrievedStorage.fame += fame;

    setLocalStorage(retrievedStorage);
}