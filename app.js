let num1 = "";
let num2 = "";
let operator = "";
let total = "";
let power = false;

$(document).ready(function() {
    $('button').on('click', function(e) {
        let btn = e.target.innerHTML;
        if(btn >= '0' && btn <= '9') {
            callNumber(btn);
        } else {
            callOperator(btn);
        }
    });
});




function callNumber(num) {
    if (num1 === '') {
        num1 = num;
    } else {
        num2 = num;
    }
    displayValue(num);
}

function callOperator(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        callTotal();
        operator = oper;
    }
}

function clearValue() {

}

function clearAll() {

}

function callTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            displayValue(total);
            break;
        case '-':
            total = +num1 - +num2;
            displayValue(total);
            break;
        case '*':
            total = +num1 * +num2;
            displayValue(total);
            break;
        case '/':
            total = +num1 / +num2;
            displayValue(total);
            break;
    }
    updateVariables();
}

function displayValue(btn) {
    $('.screen-input').text(btn);
}

function updateVariables() {
    num1 = total;
    num2 = '';
}