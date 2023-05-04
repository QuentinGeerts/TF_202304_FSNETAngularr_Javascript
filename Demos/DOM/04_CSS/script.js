const paragraphe = document.getElementById('paragraphe');
const btnGreen = document.getElementById('btnGreen');
const btnWavyUnderline = document.getElementById('btnWavyUnderline');

btnGreen.addEventListener('click', () => {
    console.dir(paragraphe);
    paragraphe.style.color = 'green';
});

btnWavyUnderline.addEventListener('click', () => {
    paragraphe.style.textDecorationColor = 'red';
    paragraphe.style.textDecorationStyle = 'wavy';
    paragraphe.style.textDecorationLine = 'underline';
    paragraphe.style.textDecorationThickness = '3px'

});