const moon = document.querySelector('[data-moon]');
const sun = document.querySelector('[data-sun]');
const body = document.querySelector('body');

if (localStorage.getItem('mode')) {
    if (localStorage.getItem('mode') == 'light') {
        body.classList.toggle('dark', false);
        moon.classList.toggle('hide', false);
        sun.classList.toggle('hide', true);
    }
    else if (localStorage.getItem('mode') == 'dark') {
        body.classList.toggle('dark', true);
        moon.classList.toggle('hide', true);
        sun.classList.toggle('hide', false);
    }
} else {
    localStorage.setItem('mode', 'dark');
}

moon.addEventListener('click', () => {
    moon.classList.toggle('hide', true);
    sun.classList.toggle('hide', false);
    localStorage.setItem('mode', 'dark');
    body.classList.toggle('dark', true);
});

sun.addEventListener('click', () => {
    sun.classList.toggle('hide', true);
    moon.classList.toggle('hide', false);
    localStorage.setItem('mode', 'light');
    body.classList.toggle('dark', false);
});

// const searchInput = document.querySelector("[data-search]");

// const animations = [];

// searchInput.addEventListener("input", (e) => {
//     const value = e.target.value.toLowerCase();
//     console.log(value);

//     animations.forEach((animation) => {
//         const isVisible =
//             animation.name.toLowerCase().includes(value) ||
//             animation.description.toLowerCase().includes(value);
//         user.element.classList.toggle("hide", !isVisible);
//     });
// });
