// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderGoblin } from "../utils.js";


const test = QUnit.test;

test('renderGoblin should return an <article> with info, classes, and ids', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<article class="render-goblin" id="render1"><div class="goblin" id="goblin1"><h3 class="name" id="name1">Name: Bob</h3><h3 class="hp" id="hp1">HP: 4</h3></div><img class="goblin-image" src="../assets/Bokoblin.png"></article>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGoblin({
        id: 1,
        name: 'Bob',
        hp: 4
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
