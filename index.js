let scoreOne = 0;
let scoreTwo = 0; 

const scoreLeft = document.getElementById("score-one");
const scoreRight = document.getElementById("score-two");

const rightBox = document.getElementById("right-box");
const leftBox = document.getElementById("left-box");

//left side score functions

function addOne() {
 scoreOne += 1;
 scoreLeft.textContent = scoreOne;
 
 if (scoreOne > scoreTwo) {
  leftBox.style.border = "5px solid red"; 
  rightBox.style.border = "none"; 
} else if (scoreTwo > scoreOne) {
  rightBox.style.border = "5px solid red"; 
  leftBox.style.border = "none"; 
}
 } 

function addTwo() {
 scoreOne += 2;
 scoreLeft.textContent = scoreOne;   
} 

function addThree() {
 scoreOne += 3;
 scoreLeft.textContent = scoreOne;
} 

 //Right side score functions

function addOneRight() {
 scoreTwo += 1;
 scoreRight.textContent = scoreTwo;
 } 

function addTwoRight() {
  scoreTwo += 2;
 scoreRight.textContent = scoreTwo;   
} 

function addThreeRight() {
 scoreTwo += 3;
 scoreRight.textContent = scoreTwo;
} 




//reset game function 
function reset() {
  scoreOne = 0;
  scoreTwo = 0;
  
  scoreLeft.textContent = scoreOne;
  scoreRight.textContent = scoreTwo;
}


