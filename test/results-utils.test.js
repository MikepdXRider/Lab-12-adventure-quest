import { createEncounterString, createResultsString, findUserFighterImg, handleFameResults, handleHpResults, renderResultsPage } from '../Results/results-utils.js';


const test = QUnit.test;


test('call handleHpResults, expect a "healthy" string.', assert => {
    const expected = 'healthy';

    const actual = handleHpResults(21);

    assert.equal(actual, expected);
});


test('call handleHpResults, expect a "frail" string.', assert => {
    const expected = 'frail';

    const actual = handleHpResults(11);

    assert.equal(actual, expected);
});


test('call handleHpResults, expect a "dead" string.', assert => {
    const expected = 'dead';

    const actual = handleHpResults(0);

    assert.equal(actual, expected);
});


test('call handleFameResults, expect a "nobody" string.', assert => {
    const expected = 'nobody';

    const actual = handleFameResults(9);

    assert.equal(actual, expected);
});


test('call handleFameResults, expect a "respected" string.', assert => {
    const expected = 'respected';

    const actual = handleFameResults(11);

    assert.equal(actual, expected);
});


test('call handleFameResults, expect a "famous" string.', assert => {
    const expected = 'famous';

    const actual = handleFameResults(22);

    assert.equal(actual, expected);
});


test('call createResultsString, expect a "dead" string.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 0, fame: 10,
        encounteredEnemyIds: []
    };

    const actual = createResultsString(userData);

    const expected = 'You died. No one came to your funeral.';

    assert.equal(actual, expected);
});


test('call createResultsString, expect a "FLAWLESS VICTORY" string.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 30, fame: 30,
        encounteredEnemyIds: []
    };

    const actual = createResultsString(userData);

    const expected = 'FLAWLESS VICTORY!! You exit as you entered! You leave the peoples champion. You can hear your name chanted throughout the region!';

    assert.equal(actual, expected);
});


test('call createResultsString, expect a random "alive" string.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 19, fame: 19,
        encounteredEnemyIds: []
    };

    const actual = createResultsString(userData);

    const expected = 'You barely survive the dojo. You are hailed a great warrior.';

    assert.equal(actual, expected);
});


test('call createEncounterString, expect a string with one name.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 19, fame: 19,
        encounteredEnemyIds: [1]
    };

    const actual = createEncounterString(userData);

    const expected = 'You encountered Raiden.';

    assert.equal(actual, expected);
});


test('call createEncounterString, expect a string with two names.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 19, fame: 19,
        encounteredEnemyIds: [1, 2]
    };

    const actual = createEncounterString(userData);

    const expected = 'You encountered Raiden, Sub Zero.';

    assert.equal(actual, expected);
});


test('call createEncounterString, expect a string with three names.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 19, fame: 19,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = createEncounterString(userData);

    const expected = 'You encountered Raiden, Sub Zero, Johnny Cage.';

    assert.equal(actual, expected);
});


test('call findUserFighterImg, expect a Liu Kang string relative path.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 19, fame: 19,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = findUserFighterImg(userData);

    const expected = '../assets/liukang.gif';

    assert.equal(actual, expected);
});


test('call findUserFighterImg, expect a Goro string relative path.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Goro',
        hp: 19, fame: 19,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = findUserFighterImg(userData);

    const expected = '../assets/goro.gif';

    assert.equal(actual, expected);
});


test('call findUserFighterImg, expect a Sonya Blade string relative path.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Sonya Blade',
        hp: 19, fame: 19,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = findUserFighterImg(userData);

    const expected = '../assets/sonyablade.gif';

    assert.equal(actual, expected);
});


test('call renderResultsPage, expect an h1 element with expected info.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 11, 
        fame: 50,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = renderResultsPage(userData)[0];

    const expected = `<h1>Jar2</h1>`;

    assert.equal(actual.outerHTML, expected);
});


test('call renderResultsPage, expect an img element with expected info.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 11, 
        fame: 50,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = renderResultsPage(userData)[1];

    const expected = `<img src="../assets/liukang.gif">`;

    assert.equal(actual.outerHTML, expected);
});


test('call renderResultsPage, expect an div element with expected info.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 11, 
        fame: 50,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = renderResultsPage(userData)[2];

    const expected = `<div class="flex"><p>Health: 11</p><p>Fame: 50</p></div>`;

    assert.equal(actual.outerHTML, expected);
});


test('call renderResultsPage, expect an h3 element with expected info.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 11, 
        fame: 50,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = renderResultsPage(userData)[3];

    const expected = `<h3>You encountered Raiden, Sub Zero, Johnny Cage. You barely survive the dojo. You leave the peoples champion. You can hear your name chanted throughout the region!</h3>`;

    assert.equal(actual.outerHTML, expected);
});


test('call renderResultsPage, expect an button element with expected info.', assert => {
    const userData = {
        name: 'Jar2',
        class: 'Liu Kang',
        hp: 11, 
        fame: 50,
        encounteredEnemyIds: [1, 2, 3]
    };

    const actual = renderResultsPage(userData)[4];

    const expected = `<button>Make a new character</button>`;

    assert.equal(actual.outerHTML, expected);
});


