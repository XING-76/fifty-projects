const NAV = document.querySelector('.nav');
window.addEventListener('scroll', handleOnNavbarActiveClass);

function handleOnNavbarActiveClass() {
    if (window.scrollY > NAV.offsetHeight + 150) {
        NAV.classList.add('active');
    } else {
        NAV.classList.remove('active');
    }
}
