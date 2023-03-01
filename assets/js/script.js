document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer();
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);  
            }
        })
    }

/* Add listener for Enter key (as alternative to mouse click)  */
    document.getElementById("answer-box").addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }    
    })

    runGame("add"); /* start game is "add" */
})

/** 
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been porcessed
*/
function runGame(gameType){
/* Clear answer-box and set focus */
    document.getElementById("answer-box").value="";
    document.getElementById("answer-box").focus();

/* Create 2 random numbers between 1-25 (inclusive) */    
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    switch(gameType){
        case "add":
            displayAddQuestion(num1,num2);
            break;
        case "subtract":
            displaySubtractQuestion(num1,num2);
            break;
        case "multiply":
            displayMultiplyQuestion(num1,num2);
            break;
        case "divide":
            displayDivideQuestion(num1,num2);
            break;
        default:
            alert(`Unknow game type: ${gameType}`);
            throw `Unknow game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswerArray = calculateCorrectAnswer();
    let calculatedAnswer = Math.floor(calculatedAnswerArray[0]);
    console.log("calculatedAnswer",calculatedAnswer);
    let isCorrect = userAnswer === calculatedAnswer;

    if (isCorrect){
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww....you answere ${userAnswer}. The correct answer was ${calculatedAnswer}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswerArray[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText); 
    let operand2 = parseInt(document.getElementById("operand2").innerText); 
    let operator = document.getElementById("operator").innerText;

    switch (operator){
        case "+":
            return [operand1 + operand2, "add"]; 
        case "-":
            return [operand1 - operand2, "subtract"]; 
        case "x":
            return [operand1 * operand2, "multiply"]; 
        case "/":
            return [operand1 / operand2, "divide"]; 
        default:
            alert(`Unimplemented operator ${operator}`);
            throw `Unimplemented operator ${operator}. Aborting!`;
    }
}
/**
 * Get the current score from the DOM and increments it by 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;       
}
/**
 * Get the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAddQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;      
    document.getElementById("operand2").textContent = operand2;   
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1: operand2;      
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2: operand1;   
    document.getElementById("operator").textContent = "-";    
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;      
    document.getElementById("operand2").textContent = operand2;   
    document.getElementById("operator").textContent = "x";    
}

function displayDivideQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1: operand2;      
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2: operand1;   
    document.getElementById("operator").textContent = "/";    
} 