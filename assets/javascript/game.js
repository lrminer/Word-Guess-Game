//space for some global variables you might want




//for testing purpose; simple and strictly vowels;
const word = "AEIOU";
console.log(word);


//we need to make a variable that captures the array of a string
const wordArray = word.toLowerCase().split("");


console.log(wordArray);
//we can use this as a reference for later. this is also likely to be replaced by a drier method









//Reference from RPS Game
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let win = 0;
let lose = 0;
let tie = 0;
let wordDisplay = ["-", "-", "-", "-", "-"]; //this is a variable that will be used to keep the state of the game


//display the state of game onto the HTML file
el = document.getElementById("game");
el.innerHTML = `${wordDisplay[0]}${wordDisplay[1]}${wordDisplay[2]}${wordDisplay[3]}${wordDisplay[4]}`;
        

document.onkeyup = function () {




    const userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    for (i = 0; i < wordArray.length; i++) {
        if (userGuess === wordArray[i]) {
            console.log(true);
            wordDisplay[i] = wordArray[i];

            //print to HTML
            el = document.getElementById("game");
            el.innerHTML = `${wordDisplay[0]}${wordDisplay[1]}${wordDisplay[2]}${wordDisplay[3]}${wordDisplay[4]}`;
            el.innerHTML = `${wordDisplay[0]}${wordDisplay[1]}${wordDisplay[2]}${wordDisplay[3]}${wordDisplay[4]}`;
        }
        
    } 
    


};





    








/*    if (userGuess == "r" || userGuess == "p" || userGuess == "s") {
        let result;
        if (((userGuess == "r") && (computerGuess == "s")) ||
            ((userGuess == "s") && (computerGuess == "p")) ||
            ((userGuess == "p") && (computerGuess == "r"))) {
            console.log("you win");
            win++;
            result = "win";
        } else if (userGuess == computerGuess) {
            console.log("you tie");
            tie++;
            result = "tie";
        } else {
            console.log("you lose");
            lose++;
            result = "lose";
        }
        el = document.getElementById("game");
        el.innerHTML = `
                    Your guess: ${userGuess}
                    CPU guess ${computerGuess}
                    Wins: ${win} 
                    Losses: ${lose}
                    Ties: ${tie}`;
    } else {
        alert("you chose incorrectly!")
    }
} */