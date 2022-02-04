// import functions and grab DOM elements
import { renderGameStatus, renderGoblin } from './utils.js';

const goblinEl = document.getElementById('goblins');
const addGoblin = document.getElementById('add-goblin');
const linkHP = document.getElementById('linkHP');
const gameStatus = document.getElementById('game-status');
const defeatedNum = document.getElementById('defeated-number');
// let state
let playerHP = 10;
const goblins = [
    {
        id: 1,
        name: 'Bob',
        hp: 4
    },
    {
        id: 2,
        name: 'Katy',
        hp: 2
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
        hp: goblinHP
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
    // link tries to hit goblin
    // if math.random is below a threshold, goblin hp --
    gameStatus.textContent = '';

    if (goblin.hp <= 0) {
        const game = {
            name: goblin.name,
            case: 8
        };
        gameStatus.append(renderGameStatus(game));
        return;
    }

    if (Math.random() < .6) {
        goblin.hp--;
        if (goblin.hp === 0) {
            const caseVal = checkDead(goblin);
            console.log(caseVal);
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
            if (caseVal[0] === 5) return;
        } else {
            const game = {
                name: goblin.name,
                case: 1
            };
            gameStatus.append(renderGameStatus(game));
        }
    } else {
        const game = {
            name: goblin.name,
            case: 6
        };
        gameStatus.append(renderGameStatus(game));
    }

    // goblin tries to hit link
    // if math.random is below a threshold, player hp --
    if (Math.random() < 0.5) {
        playerHP--;
        if (playerHP === 0) {
            const game = {
                name: goblin.name,
                case: 4
            };
            gameStatus.append(renderGameStatus(game));
        } else {
            const game = {
                name: goblin.name,
                case: 2
            };
            gameStatus.append(renderGameStatus(game));
        }
    } else {
        const game = {
            name: goblin.name,
            case: 7
        };
        gameStatus.append(renderGameStatus(game));
    }
    displayGoblins();
}

function checkDead(goblin) {
    let numDead = 0;
    for (let goblin of goblins) {
        if (goblin.hp === 0) numDead++;
    }
    if (numDead === goblins.length) {
        return [5, numDead];
    } else {
        return [3, numDead];
    }

}