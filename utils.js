export function renderGoblin(goblin) {
    const article = document.createElement('article');
    article.classList.add('render-goblin');
    article.setAttribute('id', `render${goblin.id}`);
    if (goblin.class === 'dead') {
        article.classList.add(`${goblin.class}`);
    }

    const div = document.createElement('div');
    div.classList.add('goblin');
    div.setAttribute('id', `goblin${goblin.id}`);

    const h3Name = document.createElement('h3');
    h3Name.classList.add('name');
    h3Name.setAttribute('id', `name${goblin.id}`);
    h3Name.textContent = `Name: ${goblin.name}`;

    const h3HP = document.createElement('h3');
    h3HP.classList.add('hp');
    h3HP.setAttribute('id', `hp${goblin.id}`);
    h3HP.textContent = `HP: ${goblin.hp}`;

    div.append(h3Name, h3HP);

    const img = document.createElement('img');
    img.classList.add('goblin-image');
    img.src = '../assets/Bokoblin.png';

    article.append(div, img);

    return article;
}

export function renderGameStatus(status) {
    const h2 = document.createElement('h2');
    switch (status.case) {
        case 'hit goblin':
            h2.textContent = `You hit ${status.name}.`;
            break;
        case 'goblin hit you':
            h2.textContent = `${status.name} hit you.`;
            break;
        case 'you killed':
            h2.textContent = `You killed ${status.name}`;
            break;
        case 'you lose':
            h2.textContent = `${status.name} killed you. You lose!`;
            break;
        case 'you won':
            h2.textContent = `Congratulations! You saved Hyrule!`;
            break;
        case 'missed goblin':
            h2.textContent = `You missed ${status.name}.`;
            break;
        case 'goblin missed you':
            h2.textContent = `${status.name} missed you.`;
            break;
        case 'goblin already dead':
            h2.textContent = `${status.name} is already dead. Please choose another foe to battle.`;
            break;
        default:
            h2.textContent = '';
    }
    return h2;
}
