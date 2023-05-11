let inputNum = document.getElementById('inputNum');
let result = document.getElementById('result');
let operator = '';
let num1 = 0;
let currentResult = 0;

function operatorClick(op){
    operator = op;
    if (currentResult === 0){
        num1 = parseFloat(inputNum.value);
    }
    else{
        num1 = currentResult;
    }
    inputNum.value = '';
}

function calculate(){
    let num2 = parseFloat(inputNum.value);
    let re = 0;

if (operator === '+'){
    re = num1 + num2;
}
else if (operator === '-'){
    re = num1 - num2;
}
else if (operator === '*'){
    re = num1 * num2;
}
else if (operator === '/'){
    re = num1 / num2;
}

if (operator !== ''){
    num1 = result;
}

result.innerText = re;
operator = '';
currentResult = re;
}

function clearFields(){
    inputNum.value = '';
    result.innerText = 0;
    operator = '';
    num1 = 0;
}