const roseImg = document.getElementById('roseImg');
const buttons = document.querySelectorAll('nav button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const effectClass = button.getAttribute('data-effect');
        roseImg.className = '';
        roseImg.classList.add(effectClass);
    });
});