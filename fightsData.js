export const fightData = [
    {
        id: 1,
        image: '../assets/raiden.gif',
        enemyName: 'Raiden',
        prompt: 'Bob says your shirt makes you look fat. How do you respond?',
        options: [
            {
                text: 'Yeah well your shirt makes you look fat too.',
                hpEffect: 5,
                fameEffect: 5,
                startsFight: true,
                resultText: 'NA, this will be the result from rock paper scissors instead'
            },
            {
                text: 'Ah man, yeah I\'ve been gaining some weight lately.',
                hpEffect: -1,
                fameEffect: -5,
                startsFight: false,
                resultText: 'Bob laughs at you and smacks your belly, you lose 5 fame'
            },
            {
                text: 'Uhh, okay.',
                hpEffect: 0,
                fameEffect: 0,
                startsFight: false,
                resultText: 'Bob is confused by your neutrality and goes back to being annoying in general'
            }
        ]
    },
    {
        id: 2,
        image: '../assets/sub-zero.gif',
        enemyName: 'Sub Zero',
        prompt: 'Bob says your shirt makes you look fat. How do you respond?',
        options: [
            {
                text: 'Yeah well your shirt makes you look fat too.',
                hpEffect: 5,
                fameEffect: 5,
                startsFight: true,
                resultText: 'NA, this will be the result from rock paper scissors instead'
            },
            {
                text: 'Ah man, yeah I\'ve been gaining some weight lately.',
                hpEffect: 0,
                fameEffect: 10,
                startsFight: false,
                resultText: 'Bob laughs at you and smacks your belly, you lose 5 fame'
            },
            {
                text: 'Uhh, okay.',
                hpEffect: 0,
                fameEffect: 0,
                startsFight: false,
                resultText: 'Bob is confused by your neutrality and goes back to being annoying in general'
            }
        ]
    },
    {
        id: 3,
        image: '../assets/johnny-cage.gif',
        enemyName: 'Johnny Cage',
        prompt: 'Bob says your shirt makes you look fat. How do you respond?',
        options: [
            {
                text: 'Yeah well your shirt makes you look fat too.',
                hpEffect: 5,
                fameEffect: 5,
                startsFight: true,
                resultText: 'NA, this will be the result from rock paper scissors instead'
            },
            {
                text: 'Ah man, yeah I\'ve been gaining some weight lately.',
                hpEffect: 0,
                fameEffect: 10,
                startsFight: false,
                resultText: 'Bob laughs at you and smacks your belly, you lose 5 fame'
            },
            {
                text: 'Uhh, okay.',
                hpEffect: 0,
                fameEffect: 0,
                startsFight: false,
                resultText: 'Bob is confused by your neutrality and goes back to being annoying in general'
            }
        ]
    },
];
