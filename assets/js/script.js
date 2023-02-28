document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);  
            }
        })
    }

    runGame("addition"); /* start game is "addition" */
})

/** 
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been porcessed
*/
function runGame(gameType){
    let num1 = Math.floor(Math.random()*25) + 1;
    let num2 = Math.floor(Math.random()*25) + 1;

    switch(gameType){
        case "addition":
            displayAdditionQuestion(num1,num2);
            break;
        default:
            alert(`Unknow game type: ${gameType}`);
            throw `Unknow game type: ${gameType}. Aborting`;
    }

}

function checkAnswer(){
    
}

function calculateCorrectScore(){
    
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;      
    document.getElementById("operand2").textContent = operand2;   
    document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}
/*function displayDivideQuestion(){
    
} */