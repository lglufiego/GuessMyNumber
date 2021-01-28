const randomNumber = Math.floor(Math.random() * 31); 

if(randomNumber == 0) {
    randomNumber = Math.floor(Math.random() * 31);
}

document.getElementById('myNumb').value = 0;



function restartGame () {
    const randomNumber = Math.floor(Math.random() * 31); 

    if(randomNumber == 0) {
        randomNumber = Math.floor(Math.random() * 31);
    }

    document.getElementById('myNumb').value = 0;

    document.getElementById('msg').innerHTML = 'Start Guessing...';
    document.getElementById('msg').style.opacity = 0.3;
    document.getElementById('msg').style.color = 'white';
    
}




function checkNumber () {

    let myNumber = document.getElementById('myNumb').value;



    if (myNumber != randomNumber) {

        //show if too low or too high

        if ( myNumber > randomNumber){

            document.getElementById('msg').style.opacity = 1;
            document.getElementById('msg').style.color = 'rgb(185, 58, 58)';
            document.getElementById('msg').innerHTML = 'Too high! Try again...';

        } else {
            document.getElementById('msg').style.opacity = 1;
            document.getElementById('msg').style.color = 'rgb(147,112,219)';
            document.getElementById('msg').innerHTML = 'Too low! Try again...';
        }

        //display number already log

        //deduct 1 hp

    }
    else {

        document.getElementById('msg').style.opacity = 1;
        document.getElementById('msg').style.color = 'rgb(50,205,50)';
        document.getElementById('msg').innerHTML = 'VICTORY!!!';
        document.getElementById('msg').style.fontSize = '100px';

        console.log('Victory!');
        //load victory page

    }

}


startGame();