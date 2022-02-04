import { renderGoblin, renderGameStatus } from '../utils.js';


const test = QUnit.test;

test('renderGoblin should return an <article> with info, classes, and ids', (expect) => {

    const expected = `<article class="render-goblin" id="render1"><div class="goblin" id="goblin1"><h3 class="name" id="name1">Name: Bob</h3><h3 class="hp" id="hp1">HP: 4</h3></div><img class="goblin-image" src="../assets/Bokoblin.png"></article>`;

    const actual = renderGoblin({
        id: 1,
        name: 'Bob',
        hp: 4
    });

    expect.equal(actual.outerHTML, expected);
});

test('renderGameStatus should return an h2 with a class', (expect) => {
    const expected = `<h2>You hit Bob.</h2>`;
    const actual = renderGameStatus({
        name: 'Bob',
        case: 1
    });
    expect.equal(actual.outerHTML, expected);
});