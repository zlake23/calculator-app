var calcNumBtns = document.getElementsByClassName('number-btn');
var calcOperBtns = document.getElementsByClassName('operator-btn');

var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var deleteBtn = document.getElementById('calc-delete');
var displayValElement = document.getElementById('calc-display-val');

for (let i=0; i < calcNumBtns.length; i++) {
    calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i=0; i < calcOperBtns.length; i++) {
    calcOperBtns[i].addEventListener('click', updateDisplayVal, false);
}