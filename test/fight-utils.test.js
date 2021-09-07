import { determineRPSResult, WIN, LOSS, DRAW, getStringForRPSResult, updateRPSGameData } from '../Fight/fight-utils.js';

const test = QUnit.test;

test('determineRPSResult returns WIN when the user plays \'Rock\' against \'Scissors\'.', assert => {
    const expected = WIN;
    const actual = determineRPSResult('Rock', 'Scissors');
    assert.equal(actual, expected);
});

test('determineRPSResult returns DRAW when the user plays \'Rock\' against \'Rock\'.', assert => {
    const expected = DRAW;
    const actual = determineRPSResult('Rock', 'Rock');
    assert.equal(actual, expected);
});

test('determineRPSResult returns LOSS when the user plays \'Paper\' against \'Scissors\'.', assert => {
    const expected = LOSS;
    const actual = determineRPSResult('Paper', 'Scissors');
    assert.equal(actual, expected);
});

test('getStringForRPSResult returns the correct strings.', assert => {
    assert.equal(getStringForRPSResult(WIN), 'You won this round', 'The WIN string is correct.');
    assert.equal(getStringForRPSResult(DRAW), 'It was a draw', 'The DRAW string is correct.');
    assert.equal(getStringForRPSResult(LOSS), 'You lost this round', 'The LOSS string is correct.');
});

test('updateRPSGameData increments wins after a WIN.', assert => {
    const testData = { wins: 1, losses: 2 };
    const expected = { wins: 2, losses: 2 };
    const actual = updateRPSGameData(testData, WIN);
    assert.deepEqual(actual, expected);
});

test('updateRPSGameData increments losses after a LOSS.', assert => {
    const testData = { wins: 1, losses: 2 };
    const expected = { wins: 1, losses: 3 };
    const actual = updateRPSGameData(testData, LOSS);
    assert.deepEqual(actual, expected);
});

test('updateRPSGameData has no effect after a DRAW.', assert => {
    const testData = { wins: 1, losses: 2 };
    const expected = { wins: 1, losses: 2 };
    const actual = updateRPSGameData(testData, DRAW);
    assert.deepEqual(actual, expected);
});
