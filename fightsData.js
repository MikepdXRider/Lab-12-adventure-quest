export const fightData = [
    {
        id: 1,
        image: '../assets/raiden.gif',
        enemyName: 'Raiden',
        prompt: 'What is the airspeed velocity of an unladen swallow?',
        options: [
            {
                text: 'Ignore Raiden',
                hpEffect: 5,
                fameEffect: 5,
                startsFight: true,
                resultText: 'When a god speaks, heed him. '
            },
            {
                text: '17.3 MPH',
                hpEffect: -1,
                fameEffect: -5,
                startsFight: false,
                resultText: 'You fool, didn\'t you watch Monty Python! (Raiden smacks you!)'
            },
            {
                text: '20.1 MPH',
                hpEffect: 1,
                fameEffect: 40,
                startsFight: false,
                resultText: 'I sense great power within you. I was wrong to doubt you. (Raiden patts you on the back!)'
            }
        ]
    },
    {
        id: 2,
        image: '../assets/sub-zero.gif',
        enemyName: 'Sub Zero',
        prompt: 'Sub Zero shoots an Ice Blast at you!',
        options: [
            {
                text: 'Dodge the Ice Blast and punch Sub Zero in the face.',
                hpEffect: 5,
                fameEffect: 5,
                startsFight: true,
                resultText: 'I\'m stronger than you realize. You\'re not worthy of a real fight. I challenge you to Rock Paper Scissors... of DEATH!'
            },
            {
                text: 'Block the Ice Blast with you hand and laugh.',
                hpEffect: 0,
                fameEffect: 10,
                startsFight: false,
                resultText: 'Impressive...'
            },
            {
                text: 'Turn and run away.',
                hpEffect: 0,
                fameEffect: 0,
                startsFight: false,
                resultText: 'I\'m Sub Zero, not Captain Cold.'
            }
        ]
    },
    {
        id: 3,
        image: '../assets/johnny-cage.gif',
        enemyName: 'Johnny Cage',
        prompt: 'You approach Johnny Cage...',
        options: [
            {
                text: 'Punch Johnny Cage in the face.',
                hpEffect: 5,
                fameEffect: 5,
                startsFight: true,
                resultText: 'Those were $500 sunglasses, fudge nuggets! Prepare to die! (Johnny Cage challenges you to Rock Paper Scissors... of DEATH!)'
            },
            {
                text: 'Help Johnny Cage with his sunglasses.',
                hpEffect: 0,
                fameEffect: 10,
                startsFight: false,
                resultText: 'Those were $500 sunglasses, thanks!'
            },
            {
                text: 'You notice some sunglasses on the ground. Grab them and run.',
                hpEffect: 0,
                fameEffect: 0,
                startsFight: true,
                resultText: 'Those were my $500 sunglasses, fudge nuggets! Prepare to die! (Johnny Cage challenges you to Rock Paper Scissors... of DEATH!)'
            }
        ]
    },
];
