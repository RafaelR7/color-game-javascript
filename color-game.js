var numberOfSquares = 6
var colors = [];
var pickedColor;

var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var squares = document.querySelectorAll('.square');
var h1 = document.querySelector('h1');
var resetButtom = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init(){
    setupModeButtons();
    setupButtonsListeners();
}

function setupButtonsListeners(){
    for(let index = 0; index < squares.length; index++){
        squares[index].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = 'Correct'
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButtom.textContent = 'Play Again?';
            } else {
                this.style.backgroundColor = '#232323';
                messageDisplay.textContent = 'Try Again'
            }
        });
    }
    reset();
}

function setupModeButtons(){
    for (let index = 0; index < modeButtons.length; index++) {
        modeButtons[index].addEventListener("click", function() {
            modeButtons[0].classList.remove('selected');       
            modeButtons[1].classList.remove('selected');   
            this.classList.add('selected');    
            this.textContent === 'Easy' ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}


function reset(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    resetButtom.textContent = 'New Colors';

    for(let index = 0; index < squares.length; index++){
        if (colors[index]) {
            squares[index].style.display = 'block';
            squares[index].style.backgroundColor = colors[index];
        } else {
            squares[index].style.display = 'none';
        }
    }
    
    h1.style.backgroundColor = 'steelblue';
}

resetButtom.addEventListener("click", function() {
    reset();
})

function changeColors(color){
    for (let index = 0; index < squares.length; index++)
        squares[index].style.backgroundColor = color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (let index = 0; index < num; index++) 
        arr = [...arr, randomColor()];
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
