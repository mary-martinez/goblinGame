// import functions and grab DOM elements
import { renderGameStatus, renderGoblin } from './utils.js';

const goblinEl = document.getElementById('goblins');
const addGoblin = document.getElementById('add-goblin');
const linkHP = document.getElementById('linkHP');
const gameStatus = document.getElementById('game-status');
const defeatedNum = document.getElementById('defeated-number');
const linkImg = document.getElementById('link');
// let state
let playerHP = 10;
const goblins = [
    {
        id: 1,
        name: 'Bob',
        hp: 4,
        class: ''
    },
    {
        id: 2,
        name: 'Katy',
        hp: 2,
        class: ''
    }
];
let goblinNumber = goblins.length;
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
addGoblin.addEventListener('submit', (e) => {
    e.preventDefault();

    const newGoblin = new FormData(addGoblin);

    const goblinHP = Math.ceil(Math.random() * 5);
    goblinNumber++;

    const newGoblinInfo = {
        id: goblinNumber,
        name: newGoblin.get('opponent-name'),
        hp: goblinHP,
        class: ''
    };

    goblins.push(newGoblinInfo);
    displayGoblins();

});

function displayGoblins() {
    // should loop through goblins array, call renderGoblins, and append them to the goblin location on the page
    goblinEl.textContent = '';
    for (let goblin of goblins) {
        const tempGoblin = renderGoblin(goblin);
        tempGoblin.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinEl.append(tempGoblin);
    }
    linkHP.textContent = `Your HP: ${playerHP}`;
}

displayGoblins();

function goblinClickHandler(goblin) {
    console.log(`clicking on ${goblin.name}`);

    gameStatus.textContent = '';

    if (goblin.hp <= 0) {
        const caseVal = checkDead();
        if (caseVal[0] === 'you won') {
            const game = {
                name: goblin.name,
                case: caseVal[0]
            };
            gameStatus.append(renderGameStatus(game));
        } else {
            const game = {
                name: goblin.name,
                case: 'goblin already dead'
            };
            gameStatus.append(renderGameStatus(game));

        }
        return;
    }

    if (Math.random() < .6) {
        goblin.hp--;
        if (goblin.hp === 0) {
            goblin.class = 'dead'
            const caseVal = checkDead();
            const game = {
                name: goblin.name,
                case: caseVal[0]
            };
            gameStatus.append(renderGameStatus(game));
            if (caseVal[1] > 1) {
                defeatedNum.textContent = `You've defeated ${caseVal[1]} bokoblins!`;
            } else {
                defeatedNum.textContent = `You've defeated ${caseVal[1]} bokoblin!`;
            }
            if (caseVal[0] === 'you won') {
                displayGoblins();
                return;
            }
        } else {
            const game = {
                name: goblin.name,
                case: 'hit goblin'
            };
            gameStatus.append(renderGameStatus(game));
        }
    } else {
        const game = {
            name: goblin.name,
            case: 'missed goblin'
        };
        gameStatus.append(renderGameStatus(game));
    }

    if (Math.random() < 0.5) {
        playerHP--;
        if (playerHP === 0) {
            const game = {
                name: goblin.name,
                case: 'you lose'
            };
            gameStatus.append(renderGameStatus(game));
            linkImg.classList.add('dead');
        } else {
            const game = {
                name: goblin.name,
                case: 'goblin hit you'
            };
            gameStatus.append(renderGameStatus(game));
        }
    } else {
        const game = {
            name: goblin.name,
            case: 'goblin missed you'
        };
        gameStatus.append(renderGameStatus(game));
    }
    displayGoblins();
}

function checkDead() {
    let numDead = 0;
    for (let goblin of goblins) {
        if (goblin.hp === 0) numDead++;
    }
    if (numDead === goblins.length) {
        return ['you won', numDead];
    } else {
        return ['you killed', numDead];
    }
}