const PASSWORD = document.getElementById('password');
const BACKGROUND = document.getElementById('background');

PASSWORD.addEventListener('input', (e) => {
    const blurValue = e.target.value.length;

    BACKGROUND.style.filter = `blur(${20 - blurValue * 2}px)`;
});
