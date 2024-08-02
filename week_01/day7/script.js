const LEFT = document.querySelector('.left');
const RIGHT = document.querySelector('.right');
const CONTAINER = document.querySelector('.container');

LEFT.addEventListener('mouseenter', () =>
    CONTAINER.classList.add('hover-left')
);
LEFT.addEventListener('mouseleave', () =>
    CONTAINER.classList.remove('hover-left')
);

RIGHT.addEventListener('mouseenter', () =>
    CONTAINER.classList.add('hover-right')
);
RIGHT.addEventListener('mouseleave', () =>
    CONTAINER.classList.remove('hover-right')
);
