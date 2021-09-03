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
export function createUserObj(form){
    const userDataObj = {
        name: form.get('user-name'),
        class: form.get('user-fighter'),
        // Update to include user-selected image.
        hp: 10,
        fame: 10,
        encounteredEnemyIds:[]
    };

    return userDataObj;
}
