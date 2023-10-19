const contenitore = document.querySelector('.contenitore');
const bottone = document.querySelector('#bottone');

contenitore.addEventListener('mousemove', (event) => {
    bottone.classList.add('mostra');
});

contenitore.addEventListener('mouseleave', () => {
    bottone.classList.remove('mostra');
});
