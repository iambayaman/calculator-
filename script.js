const calculator = document.querySelector('.js-calculator'),
    viewer = calculator.querySelector('.viewer'),
    button = calculator.querySelectorAll('button')

button.forEach( (btn) => {
    btn.addEventListener('click', view)
})

let num1 = ''
let equation = ''
let oneChek = false

function view(event) {
    const target = event.target.innerText
    if (target === 'C') {
        num1 = ''
        equation = ''
        viewer.innerText = '0'
    } else if (['+', '-', '*', '/'].includes(target)) {
        if (oneChek === false) {
            equation = equation + target
            num1 = ''
            oneChek = true
        } else {
            viewer.innerText = eval(equation)
            equation = equation + target
            num1 = ''
        }
    } else if (target === '=') {
        viewer.innerText = eval(equation)
        equation = eval(equation)
    } else {
        equation = equation + target
        console.log(equation)
        num1 = num1 + target
        viewer.innerText = num1
    }
}
