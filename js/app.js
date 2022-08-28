console.log("Hola todos")

const inputRange = document.getElementById('inputRange');
const views = document.getElementById('views');
const price = document.getElementById('price');
const arrayViews = ['10k', '50k', '100k', '500k', '1M']

inputRange.addEventListener('input', () => {
    console.log('Me diste click')
    console.log(inputRange.value);
    price.textContent = "$ " + inputRange.value +".00";
    views.textContent = arrayViews[(inputRange.value / 8 - 1)];
});