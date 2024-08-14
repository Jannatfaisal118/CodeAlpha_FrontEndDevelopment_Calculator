const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        
        if (value === 'C') {
            display.value = '';
        } else if (value === 'del') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'sqrt') {
            display.value = Math.sqrt(eval(display.value));
        } else if (value === 'factorial') {
            display.value = factorial(eval(display.value));
        } else if (value === 'sin') {
            display.value = Math.sin(eval(display.value));
        } else if (value === 'cos') {
            display.value = Math.cos(eval(display.value));
        } else if (value === 'tan') {
            display.value = Math.tan(eval(display.value));
        } else if (value === 'log') {
            display.value = Math.log10(eval(display.value));
        } else if (value === 'pi') {
            display.value += Math.PI;
        } else if (value === 'exp') {
            display.value = Math.exp(eval(display.value));
        } else if (value === 'abs') {
            display.value = Math.abs(eval(display.value));
        } else {
            display.value += value;
        }
    });
});

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
