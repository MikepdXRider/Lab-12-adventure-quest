export const USERDATA = 'USERDATA';


// 
export function getLocalStorage(){
    const retrievedStorage = localStorage.getItem(USERDATA);

    const unpackagedStorage = JSON.parse(retrievedStorage);

    return unpackagedStorage;
}


// 
export function setLocalStorage(obj){
    const prepared = JSON.stringify(obj);

    localStorage.setItem(USERDATA, prepared);
}


// 
export function createUserObj(userName, userClass){
    const userDataObj = {
        name: userName,
        class: userClass,
        hp: 10,
        fame: 10,
        encounteredEnemyIds:[]
    };

    return userDataObj;
}
