export const USERDATA = 'USERDATA';


// 
export function getLocalStorage(){
    const retrievedStorage = localStorage.getItem(USERDATA);

    if (!retrievedStorage){
        return [];
    }

    const unpackagedStorage = JSON.parse(retrievedStorage);

    return unpackagedStorage;
}


// 
export function setLocalStorage(arr){
    const preparedArr = JSON.stringify(arr);

    localStorage.setItem(USERDATA, preparedArr);
}


// 
export function createUserObj(form){
    const userDataObj = {
        name: form.get('user-name'),
        class: form.get('user-fighter'),
        hp: 10,
        fame: 10,
        encounteredEnemyIds:{}
    };

    return userDataObj;
}