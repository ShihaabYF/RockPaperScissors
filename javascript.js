'use strict'

/* declare a function called getUserWeapon(), it ask the user for one of --Rock, Paper, Scissor--,
if the user enter an invalid one it will keep asking until getting the right one: --Rock, Paper, Scissor--*/

function getUserWeapon()
{
    let userWeapon = prompt('Choose your Weapon; Rock, Paper, Scissor:');

    userWeapon = userWeapon.toUpperCase();

    //make the function robust
    //if the user enter inappropriate word --other than the ones specified: Rock, Paper, Scissor-- ask him again for appropriate one
    while((userWeapon !== 'ROCK') && (userWeapon !== 'SCISSOR') && (userWeapon !== 'PAPER'))
    {
        alert("Your weapon is NOT VALID, <<Try Again>>:\n");

        userWeapon = prompt('only the following weapons are VALID; Rock, Paper, Scissor:');

        // transform all the-userWeapon's-word-letters to upperCase
        userWeapon = userWeapon.toUpperCase();
    }
    return userWeapon;
}


/*declare a function called getComputerWeapon(), 
it returns one of: --Rock, Paper, Scissor-- */
function getComputerWeapon()
{
    let computerWeapon;

   //'random' stores a random-number that fall into the [0, 99] interval
    let random = Math.floor(Math.random()*100);

    if((random >= 0) && (random < 33))
    {
        computerWeapon = 'ROCK';
    }
    else if((random >= 33) && (random < 66))
    {
        computerWeapon = 'PAPER';
    }
    else
    {
        computerWeapon = 'SCISSOR';
    }


    return computerWeapon;
}



/*
Note --this function only handles the cases where: userWeapon !== computerWeapon 
which mean is necessary to check-that before calling it, or it will return 'undefined'*/
function isUserWeaponTheStrongest(userWeapon, computerWeapon)
{
    if(userWeapon === 'ROCK')
    {
        if(computerWeapon === 'SCISSOR')
        {
            return true;
        }
        else if(computerWeapon === 'PAPER')
        {
            return false;
        }
    }
    else if(userWeapon === 'PAPER')
    {
        if(computerWeapon === 'ROCK')
        {
            return true;
        }
        else if(computerWeapon === 'SCISSOR')
        {
            return false;
        }

    }
    else if(userWeapon === 'SCISSOR')
    {
        if(computerWeapon === 'PAPER')
        {
            return true;
        }
        else if(computerWeapon === 'ROCK')
        {
            return false;
        }

    }

    
    //Note: this line of code only run if NONE of the conditionals above are executed
    alert("The weapons are the SAME type and I DO-NOT know WHAT-TO-DO,...\n...please be sure that the weapons are distinct before calling me!!");
}

//=======================================================================
//this message should be deleted after adding an UI functionality
//
//tell the user to open first the console to truck the progress
//
//display the message:
//  "Please open the console first in order to see what is going on"
alert("Please open the console first in order to see what is going on");
//=======================================================================

// 'theWinner' gonna stores the winner of the game
let theWinner;

let userScore = 0;

let computerScore = 0;

let roundCounter = 1;

/*'userWeapon' gonna stores one of: "--Rock, Paper, Scissor--"
it will store the value that will be token from the user later */
let userWeapon;

/*'computerWeapon' that gonna stores one of: "--Rock, Paper, Scissor--"
it will store the value that will be generated randomly by the computer later */
let computerWeapon;


//make an infinite loop that only stop if 'userScore' OR 'computerScore' is equal to 5
while(true)
{
    userWeapon = getUserWeapon();

    computerWeapon = getComputerWeapon();

    //if the weapons are the same
    if (userWeapon === computerWeapon)
    {
        console.log(`The Round Number: ${roundCounter};  it is a Tie-Round, No winner, No loser!`);

        ++roundCounter;
    }
    //else if the user is the round winner 
    else if(isUserWeaponTheStrongest(userWeapon, computerWeapon))
    {
        ++userScore;

        console.log(`The Round Number: ${roundCounter}; RoundWinner: The USER.\n---UserScore: ${userScore} ------  vs --- ComputerScore: ${computerScore}---\nthe ${userWeapon} Beats the ${computerWeapon}`);
        
        ++roundCounter;
    }
    //else if the computer is the round winner
    else
    {
        ++computerScore;

        console.log(`The Round Number: ${roundCounter}; RoundWinner: The COMPUTER.\n---UserScore: ${userScore} ---  vs --- ComputerScore: ${computerScore}---\nthe ${computerWeapon} Beats the ${userWeapon}`);

        ++roundCounter;
    }

    
    //if the 'userScore' is got to 5
    if(userScore === 5)
    {
        theWinner = "USER";

        //break the loop, the winner is found successfully
        break;
    }
    //else if 'computerScore' is got to 5
    else if (computerScore === 5)
    {
        theWinner = "COMPUTER";

        //stop the loop, the winner is found successfully
        break;
    }

}


//display the message: "The winner of the game is: THE 'theWinner'", along with some fancy decoration
console.log("=================================================================");
console.log("=================================================================");
console.log("===============                                   ===============");
console.log(`===========The winner of the game is: THE ${theWinner}===========`);
console.log("===============                                   ===============");
console.log("=================================================================");
console.log("=================================================================");