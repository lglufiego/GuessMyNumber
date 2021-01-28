let randomNumber = Math.floor(Math.random() * 31); 

if(randomNumber == 0) {
    randomNumber = Math.floor(Math.random() * 31);
}

document.getElementById('myNumb').value = 1;



function restartGame() {
    randomNumber = Math.floor(Math.random() * 31); 

    if(randomNumber == 0) {
        randomNumber = Math.floor(Math.random() * 31);
    }

    document.getElementById('myNumb').value = 1;

    document.getElementById('msg').innerHTML = 'Start Guessing...';
    document.getElementById('msg').style.opacity = 0.3;
    document.getElementById('msg').style.color = 'white';
    document.getElementById('msg').style.fontSize = '4em';

    document.getElementById('checkButton').disabled = false;

    document.getElementById('gameRandomNumber').innerHTML = '?';
    document.getElementById('gameRandomNumber').style.fontSize = '5em';

    document.getElementById('game').style.backgroundColor = 'rgb(41, 40, 40)' ;

    document.getElementById('life1').src = "heart.png";
    document.getElementById('life2').src = "heart.png";
    document.getElementById('life3').src = "heart.png";

    lifepoint = 1;


    
}

function gameOver() {

    document.getElementById('game').style.backgroundColor = 'black';
    
    // const heart = document.querySelector('.hpPoints');
    // heart.parentElement.removeChild(heart);

    document.getElementById('gameRandomNumber').innerText = 'GAME OVER, BRO! Try again...';
    document.getElementById('gameRandomNumber').style.fontSize = '3em';
    document.getElementById('checkButton').disabled = true;

}



let lifepoint = 1;

function checkNumber () {

    let myNumber = document.getElementById('myNumb').value;


    if (myNumber != randomNumber) {

        if ( myNumber > randomNumber){

            document.getElementById('msg').style.opacity = 1;
            document.getElementById('msg').style.color = 'rgb(185, 58, 58)';
            document.getElementById('msg').innerHTML = 'Too high! Try again...';
            document.getElementById('msg').style.animation = 'shake 0.1s';
            document.getElementById('msg').style.animationIterationCount = 1;
            
        } else {
            document.getElementById('msg').style.opacity = 1;
            document.getElementById('msg').style.color = 'rgb(147,112,219)';
            document.getElementById('msg').innerHTML = 'Too low! Try again...';
        }

        //display number already log

        //deduct 1 hp

        if (lifepoint != 4){
            document.getElementById('life'+lifepoint).src = "empty_heart.png";
            lifepoint++;
            
            
        } else {
            
            gameOver();
        }


    }
    else {

        document.getElementById('msg').style.opacity = 1;
        document.getElementById('msg').style.color = 'white';
        document.getElementById('msg').innerHTML = 'VICTORY!!!';
        document.getElementById('msg').style.fontSize = '5em';

        document.getElementById('game').style.backgroundColor = 'rgb(34,139,34)' ;

        document.getElementById('gameRandomNumber').innerHTML = randomNumber;

        document.getElementById('checkButton').disabled = true;

        console.log('Victory!');
        //load victory page

    }

}
