import { getLocalStorage, USERDATA, setLocalStorage, createUserObj } from '../loc-stor-utils.js';


const test = QUnit.test;


test('call getLocalStorage, expect a static array.', assert => {
    const expected = [{ id: 1, name: 'burp' }, { id: 2, name: 'blurp' }];

    const packagedExpected = JSON.stringify(expected);

    localStorage.setItem(USERDATA, packagedExpected);

    const actual = getLocalStorage();

    assert.deepEqual(actual, expected);
});


test('call setLocalStorage, expect a static array.', assert => {
    const expected = [{ id: 1, name: 'bump' }, { id: 2, name: 'blump' }];
    
    setLocalStorage(expected);
    
    const packagedExpected = localStorage.getItem(USERDATA);
    
    const actual = JSON.parse(packagedExpected);

    assert.deepEqual(actual, expected);
});


test('call createUserObj, expect a static obj,.', assert => {
    const expected = {
        name: 'bark',
        class: 'doggo',
        hp: 10,
        fame: 10,
        encounteredEnemyIds:[]
    };
    
    const actual = createUserObj('bark', 'doggo');

    assert.deepEqual(actual, expected);
});


