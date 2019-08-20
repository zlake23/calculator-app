
//declares variables for each button type
var calcNumBtns = document.getElementsByClassName('number-btn');
var calcOperBtns = document.getElementsByClassName('operator-btn');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var deleteBtn = document.getElementById('calc-delete');
var displayValElement = document.getElementById('calc-display-val');

//sets initial values to begin calculations
var displayVal = '0';
var pendingVal;
var evalStringArray = [];


//updates calculator screen each time button is clicked to display value
var updateDisplayVal = (clickBtn) => {
    var btnText = clickBtn.target.innerText;

    if(displayVal === '0') {
        displayVal = '';
    }

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

//iterates through all number button variables to send value of button to calculator display
for (let i=0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

//iterates through all operator button variables to send value of button to calculator display
for (let i=0; i < calcOperBtns.length; i++) {
    calcOperBtns[i].addEventListener('click', performOperation, false);
}

//uses switch statements to perform each operator function when button is pressed
var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal
            displayVal = '0'
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal
            displayVal = '0'
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '÷':
            pendingVal = displayVal
            displayVal = '0'
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
         case '×':
            pendingVal = displayVal
            displayVal = '0'
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;

            //gives function to equals button to evaluate given string of numbers and operators
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            dipslayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;
        default: 
            break;
    }
}



//clears calculator screen and all previously entered operations
clearBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;
}


//provides function to delete button to remove last index position of display value each button press
deleteBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
    
    if(displayVal === '') {
        displayVal = '0';
    }
    
    displayValElement.innerText= displayVal;
}

//provides function to decimal button to include decimal point only once in a number string
decimalBtn.onclick = () => {
    if(!displayVal.includes('.')) {
        displayVal += '.';
    }
    displayValElement.innerText = displayVal;
}

