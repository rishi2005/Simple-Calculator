let plus = document.getElementById("+")
let minus = document.getElementById("-")
let multiply = document.getElementById("*")
let divide = document.getElementById("/")

let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let decimal = document.getElementById(".")
let percent = document.getElementById("%")
let equals = document.getElementById("=")
let screen = document.getElementById("screen")
let CE = document.getElementById("CE")
let DEL = document.getElementById("DEL")



one.addEventListener('click', () => {
    screen.innerText += "1"
})

two.addEventListener('click', () => {
    screen.innerText += "2"
})

three.addEventListener('click', () => {
    screen.innerText += "3"
})

four.addEventListener('click', () => {
    screen.innerText += "4"
})

five.addEventListener('click', () => {
    screen.innerText += "5"
})

six.addEventListener('click', () => {
    screen.innerText += "6"
})

seven.addEventListener('click', () => {
    screen.innerText += "7"
})

eight.addEventListener('click', () => {
    screen.innerText += "8"
})

nine.addEventListener('click', () => {
    screen.innerText += "9"
})

zero.addEventListener('click', () => {
    screen.innerText += "0"
})

decimal.addEventListener('click', () => {
    screen.innerText += "."
})

percent.addEventListener('click', () => {
    let expression = screen.innerText;

    if (expression.includes("%")) {
        let parts = expression.split("%");

        if (parts.length === 2) {
            let percentValue = parseFloat(parts[0]); // e.g., 45
            let baseValue = parseFloat(parts[1]);    // e.g., 20

            if (!isNaN(percentValue) && !isNaN(baseValue)) {
                let result = (percentValue / 100) * baseValue;
                screen.innerText = result;
            }
        }
    } else {
        // If user hasn't typed %, just add it
        screen.innerText += "%";
    }
});



plus.addEventListener('click', () => {
    screen.innerText += "+"
})

minus.addEventListener('click', () => {
    screen.innerText += "-"
})

multiply.addEventListener('click', () => {
    screen.innerText += "*"
})

divide.addEventListener('click', () => {
    screen.innerText += "/"
})

CE.addEventListener('click', () => {
    screen.innerText = ""
})

DEL.addEventListener('click', () => {
    let expression = screen.innerText
    let expressionList = expression.split("")
    expressionList.pop()
    screen.innerText = expressionList.join("")
})

equals.addEventListener('click', () => {
    let expression = screen.innerText
    screen.innerText = eval(expression)
})
