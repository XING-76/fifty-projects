const LABELS = document.querySelectorAll('.form-control label');

LABELS.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map(
            (letter, idx) =>
                `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
        )
        .join('');
});
