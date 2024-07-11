let display = document.getElementById('toDisplay');

let addToDisplay = (value) => {
    
        display.value += value;

}    


let toCancelAll = () => {
    display.value = "";
}

let toErase = () => {
    display.value= display.value.substring(0, display.value.length-1);
}

document.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        toCalculate();
    }
});

let toCalculate = () => {

    let equation = display.value;
    let optionIndex;
    let firstNumber, secondNumber, option;
    // console.log(typeof(equation))

    for (let i = 0; i < equation.length; i++) {
        // console.log(element);
        const element = equation[i]

        // console.log(element);
        // if(element < 10 && element > -1){
        //     console.log(element);
        // }
        if (isNaN(element) == true) {
            optionIndex = (equation.indexOf(element));

        }
    }


    firstNumber = equation.substring(0, optionIndex)
    // console.log(firstNumber);

    // console.log(optionIndex);

    secondNumber = equation.substring(optionIndex + 1);
    // console.log(secondNumber)

    option = (equation.charAt(optionIndex));

    if (option == '+') {
        display.value = parseInt(firstNumber) + parseInt(secondNumber);
    }
    else if (option == '-') {
        display.value = firstNumber - secondNumber;
    }
    else if (option == 'x') {
        display.value = firstNumber * secondNumber;
    }
    else if (option == '/') {
        display.value = firstNumber / secondNumber;
    }
    // console.log(equation.charAt(0));

    // equation.forEach(element => {
    //     if(element == isNaN){
    //         console.log(element);
    //     }
    // });
    

}