// import functions and grab DOM elements
import { renderGoblin } from './utils.js';

const goblinEl = document.getElementById('goblins');


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
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

function displayGoblins() {
    // should loop through goblins array, call renderGoblins, and append them to the goblin location on the page
    goblinEl.textContent = '';
    for (let goblin of goblins) {
        const tempGoblin = renderGoblin(goblin);
        goblinEl.append(tempGoblin);
    }
};

displayGoblins();