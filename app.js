import { renderGameStatus, renderGoblin } from './utils.js';

const goblinEl = document.getElementById('goblins');
const addGoblin = document.getElementById('add-goblin');
const linkHP = document.getElementById('linkHP');
const gameStatus = document.getElementById('game-status');
const defeatedNum = document.getElementById('defeated-number');
const linkImg = document.getElementById('link');

let playerHP = 10;
let playerStrengthArray = [0.5, 0.7, 0.85];
let playerStrength = 0.4;
let numDead = 0;
const goblins = [
    {
        id: 1,
        name: 'Bob Koblin',
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
    addGoblin.reset();

});

function displayGoblins() {
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
    // console.log(`clicking on ${goblin.name}`);
    gameStatus.classList.remove('hidden');
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
    console.log(playerStrength);
    if (Math.random() < playerStrength) {
        goblin.hp--;
        if (goblin.hp === 0) {
            goblin.class = 'dead';
            numDead++;
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
    // let numDead = 0;
    // for (let goblin of goblins) {
    //     if (goblin.hp === 0) numDead++;
    // }
    if (numDead > 0 & numDead < 3) {
        playerStrength = playerStrengthArray[numDead];
        linkImg.setAttribute('id', `link${numDead}`)
    } else {
        playerStrength = playerStrengthArray[2];
    }

    if (numDead === goblins.length) {
        return ['you won', numDead];
    } else {
        return ['you killed', numDead];
    }
}