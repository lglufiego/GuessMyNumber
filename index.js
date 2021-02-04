let gameNumber = Math.floor(Math.random() * 20) + 1; 
let lifepoints = 20;
let highscore = 1;
let playerNumber = '';



document.getElementById('lifePoints').textContent = lifepoints;
document.getElementById('myNumb').value = 1;
document.getElementById('highscoreNumber').textContent = highscore;
console.log(gameNumber);




function checkNumber() {

    random = document.getElementById('randomNumber').value;
    
    playerNumber = document.getElementById('myNumb').value;

    if(lifepoints > 0){
        if(playerNumber > 0 && playerNumber < 21) {

            if ( playerNumber != gameNumber) {

                validNumber();
                
            } else {
            
                victory();
            }

            
        } else {
            invalidNumber();
        }
    } else {
        defeat();
    }
}


function restartGame() {
    gameNumber = Math.floor(Math.random() * 20)+1; 

    document.getElementById('myNumb').value = 1;
    document.getElementById('msg').classList = 'hint';
    document.getElementById('msg').textContent = 'Start Guessing...'

    document.body.style.backgroundColor = "rgb(41, 40, 40)";

    document.getElementById('checkButton').disabled = false;

    lifepoints = 20;
    document.getElementById('lifePoints').textContent = lifepoints;
    document.getElementById('highscoreNumber').textContent = highscore;
}


function victory(){
    document.body.style.backgroundColor = "rgb(93,150,38)";
    document.getElementById('msg').textContent = 'CONGRATULATIONS! YOU WIN!';
    if(highscore < lifepoints)
        highscore = lifepoints;
}

function defeat(){
    document.body.style.backgroundColor = "rgb(150,38,38)";
    document.getElementById('msg').textContent = 'Game Over!';
    document.getElementById('checkButton').disabled = true;

}


function validNumber() {
    if(gameNumber > playerNumber) {
        document.getElementById('msg').textContent = 'Too low 📉';
    } else {
        document.getElementById('msg').textContent = 'Too High 📈';
    }

    document.getElementById('msg').classList = 'valid';
    lifepoints --;
    document.getElementById('lifePoints').textContent = lifepoints;
    
}


function invalidNumber() {
    document.getElementById('msg').textContent = 'Not a valid number. Enter a number between 1 and 20.';

    document.getElementById('msg').classList = 'invalid';

}


// function restartGame() {
//     randomNumber = Math.floor(Math.random() * 21) + 1; 

//     document.getElementById('myNumb').value = 1;

//     document.getElementById('msg').innerHTML = 'Start Guessing...';
//     document.getElementById('msg').style.opacity = 0.3;
//     document.getElementById('msg').style.color = 'white';
//     document.getElementById('msg').style.fontSize = '4em';

//     document.getElementById('checkButton').disabled = false;

//     document.getElementById('gameRandomNumber').innerHTML = '?';
//     document.getElementById('gameRandomNumber').style.fontSize = '5em';

//     document.getElementById('game').style.backgroundColor = 'rgb(41, 40, 40)' ;

//     document.getElementById('life1').src = "heart.png";
//     document.getElementById('life2').src = "heart.png";
//     document.getElementById('life3').src = "heart.png";

//     lifepoint = 1;


    
// }

// function gameOver() {

//     document.getElementById('game').style.backgroundColor = 'black';
    
//     // const heart = document.querySelector('.hpPoints');
//     // heart.parentElement.removeChild(heart);

//     document.getElementById('gameRandomNumber').innerText = 'GAME OVER, BRO! Try again...';
//     document.getElementById('gameRandomNumber').style.fontSize = '3em';
//     document.getElementById('checkButton').disabled = true;

// }



// let lifepoint = 1;

// function checkNumber () {

//     let myNumber = document.getElementById('myNumb').value;


//     if (myNumber != randomNumber) {

//         if ( myNumber > randomNumber){

//             document.getElementById('msg').style.opacity = 1;
//             document.getElementById('msg').style.color = 'rgb(185, 58, 58)';
//             document.getElementById('msg').innerHTML = 'Too high! Try again...';
//             document.getElementById('msg').style.animation = 'shake 0.1s';
//             document.getElementById('msg').style.animationIterationCount = 1;
            
//         } else {
//             document.getElementById('msg').style.opacity = 1;
//             document.getElementById('msg').style.color = 'rgb(147,112,219)';
//             document.getElementById('msg').innerHTML = 'Too low! Try again...';
//         }

         
//         //display number already log

//         //deduct 1 hp

//         if (lifepoint < 3){
//             document.getElementById('life'+lifepoint).src = "empty_heart.png";
//             lifepoint++;
            
            
//         } else {
//             document.getElementById('life'+lifepoint).src = "empty_heart.png";
//             document.getElementById('msg').innerHTML = 'You missed.'
//             gameOver();
//         }


//     }
//     else {

//         document.getElementById('msg').style.opacity = 1;
//         document.getElementById('msg').style.color = 'white';
//         document.getElementById('msg').innerHTML = 'VICTORY!!!';
//         document.getElementById('msg').style.fontSize = '5em';

//         document.getElementById('game').style.backgroundColor = 'rgb(34,139,34)' ;

//         document.getElementById('gameRandomNumber').innerHTML = randomNumber;

//         document.getElementById('checkButton').disabled = true;

//         console.log('Victory!');
//         //load victory page

//     }

// }
