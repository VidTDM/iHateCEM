const moon = document.querySelector('[data-moon]');
const sun = document.querySelector('[data-sun]');
const body = document.querySelector('body');
const input = document.querySelector('[data-search]');

switch (localStorage.getItem('mode')) {
    case 'light':
        body.classList.toggle('dark', false);
        input.classList.toggle('dark', false);
        moon.classList.toggle('hide', false);
        sun.classList.toggle('hide', true);
        break;

    case 'dark':
        body.classList.toggle('dark', true);
        input.classList.toggle('dark', true);
        moon.classList.toggle('hide', true);
        sun.classList.toggle('hide', false);
        break;

    default:
        localStorage.setItem('mode', 'light');
        body.classList.toggle('dark', false);
        input.classList.toggle('dark', false);
        moon.classList.toggle('hide', false);
        sun.classList.toggle('hide', true);
        break;
}

moon.addEventListener('click', () => {
    moon.classList.toggle('hide', true);
    sun.classList.toggle('hide', false);
    localStorage.setItem('mode', 'dark');
    body.classList.toggle('dark', true);
    input.classList.toggle('dark', true);
});

sun.addEventListener('click', () => {
    sun.classList.toggle('hide', true);
    moon.classList.toggle('hide', false);
    localStorage.setItem('mode', 'light');
    body.classList.toggle('dark', false);
    input.classList.toggle('dark', false);
});

const converter = new showdown.Converter();
let animations = [];

fetch('./data.json')
    .then(res => res.json())
    .then(json => {
        animations = json.map(anim => {
            const list = document.querySelector('.list');
            const template = document.querySelector('.animation-template');
            const content = template.content.cloneNode(true);

            content.children[1].setAttribute('id', anim.id);
            content.children[1].lastElementChild.setAttribute('id', anim.id);
            content.children[0].setAttribute('id', anim.id);
            content.children[0].children[0].innerText = anim.title;
            content.children[1].children[0].children[0].innerText = anim.title;
            content.children[0].children[2].innerText = anim.description;
            content.children[1].children[2].innerHTML = converter.makeHtml(anim.usage_instructions.join('\n'));

            list.appendChild(content);

            
            return {
                id: anim.id,
                title: anim.title,
                description: anim.description,
            }
        });
    });

function openAnimation(id) {
    const modal = document.querySelector(`dialog\#${id}`);
    modal.classList.remove('animate__fadeOutDownBig');
    modal.showModal();
}

function closeAnimation(id) {
    const modal = document.querySelector(`dialog\#${id}`);
    modal.classList.add('animate__fadeOutDownBig');
    setTimeout(() => {
        modal.close();
    }, 250);
}

const searchInput = document.querySelector("[data-search]");


searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    animations.forEach((anim) => {
        const isVisible =
            anim.title.toLowerCase().includes(value) ||
            anim.description.toLowerCase().includes(value);
        document.querySelector(`button.animation\#${anim.id}`).classList.toggle('hide', !isVisible);
    });
});