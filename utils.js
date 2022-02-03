export function renderGoblin(goblin) {
    const article = document.createElement('article');
    article.classList.add('render-goblin');
    article.setAttribute('id', `render${goblin.id}`);

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