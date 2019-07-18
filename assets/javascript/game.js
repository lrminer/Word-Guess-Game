//space for some global variables you might want

const wordArray = [
    "LOGAN",
    "AEIOU",
    "MINER",
    "COLOR",
    "12345",
    "TIDES",
    "MAGIC",
    "SWORD",
    "GLASS",
    "JUMPS",
    "JOKES",
    "INTEL",
    "STARK",
    "PAPER",
    "WRITE",
    "READS",

]


const word = wordArray[Math.floor(Math.random() * wordArray.length)]
            console.log(word); 



//for testing purpose; simple and strictly vowels;
console.log(word);
let wordDisplay = ["-", "-", "-", "-", "-"]; //this is a variable that will be used to keep the state of the game

let reset = true;



el = document.getElementById("game");
el.innerHTML = `${wordDisplay[0]}${wordDisplay[1]}${wordDisplay[2]}${wordDisplay[3]}${wordDisplay[4]}`;



//we need to make a variable that captures the array of a string
const letterArray = word.toLowerCase().split("");
console.log(letterArray);
//we can use this as a reference for later. this is also likely to be replaced by a drier method #ASK









//Reference from RPS Game
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
let win = 0;
let lose = 0;
let tie = 0;


//display the state of game onto the HTML file 


document.onkeyup = function () {
    const userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);

    //for loop that checks if the user's guess matches any of the letters in the array, prints true if true, and then reassigns new value to that index in the array wordDisplay
    for (i = 0; i < letterArray.length; i++) {
        if (userGuess === letterArray[i]) {
            console.log(true);
            wordDisplay[i] = letterArray[i];

            //print to HTML
            el = document.getElementById("game");
            el.innerHTML = `${wordDisplay[0]}${wordDisplay[1]}${wordDisplay[2]}${wordDisplay[3]}${wordDisplay[4]}`; //could we use a for loop here? #ASK

        }
    }
};

/* for (i = 0; i < wordDisplay.length; i++) {
                if (wordDisplay[i] !== "-") {
                    console.log("You win this round");
                }
} */
//currently does not work... debugged with the word "aaaaa"; once it has found the first a, it prints true and stops altogether; #ASK



document.onkeyup - function () {
    const userPress = String.fromCharCode
};













/*   


    if (userGuess == "r" || userGuess == "p" || userGuess == "s") {
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