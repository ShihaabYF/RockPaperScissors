'use strict'

/* declare a function called getUserWeapon(), it ask the user for one of --Rock, Paper, Scissor--,
if the user enter an invalid one it will keep asking until getting the right one: --Rock, Paper, Scissor--
in other words it is robust*/
function getUserWeapon()
{
    // ask the user the message: "Choose your Weapon; Rock, Paper, Scissor:" and store the input in "userWeapon" variable
    let userWeapon = prompt('Choose your Weapon; Rock, Paper, Scissor:');

    // transform all the-userWeapon's-word-letters to upperCase
    userWeapon = userWeapon.toUpperCase();

    //make the function robust
    //if the user enter inappropriate word --other than the ones specified: Rock, Paper, Scissor-- ask him again for appropriate one
    while((userWeapon !== 'ROCK') && (userWeapon !== 'SCISSOR') && (userWeapon !== 'PAPER'))
    {
        //display the following message:"Your weapon is NOT VALID, Please <<Try Again>>:" 
        alert("Your weapon is NOT VALID, <<Try Again>>:\n");

        // ask the user the message: "only the following weapons are VALID; Rock, Paper, Scissor:" and store the input in "userWeapon" variable which is already declared
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
    //declare a variable named computerWeapon
    let computerWeapon;

    /* declare a variable named random,
    and stores into it a random number that fall into the [0, 99] interval */
    let random = Math.floor(Math.random()*100);

    //if the random number fall into: [0, 33); store "ROCK" in the-computerWeapon-variable
    if((random >= 0) && (random < 33))
    {
        computerWeapon = 'ROCK';
    }
    //if the random number fall into: [33, 66); store "PAPER" in the-computerWeapon-variable
    else if((random >= 33) && (random < 66))
    {
        computerWeapon = 'PAPER';
    }
    //if the random number fall into: [66, 99]; store "SCISSOR" in the-computerWeapon-variable
    else
    {
        computerWeapon = 'SCISSOR';
    }

    //return computerWeapon
    return computerWeapon;
}



/* declare a function called "isUserWeaponTheStrongest",
that has two parameters, named: "userWeapon", and "computerWeapon".

Note --this function only handles the cases where: userWeapon !== computerWeapon 
which mean is necessary to check-that before calling it, or it will return 'undefined'*/
function isUserWeaponTheStrongest(userWeapon, computerWeapon)
{
    //---if userWeapon is 'ROCK'---------------------
    if(userWeapon === 'ROCK')
    {
        //and if computerWeapon is 'SCISSOR', return true
        if(computerWeapon === 'SCISSOR')
        {
            return true;
        }
        //else if computerWeapon is 'PAPER', return false 
        else if(computerWeapon === 'PAPER')
        {
            return false;
        }
    }
    //---else if the userWeapon is 'PAPER'--------------------
    else if(userWeapon === 'PAPER')
    {
        //and if computerWeapon is 'ROCK', return true
        if(computerWeapon === 'ROCK')
        {
            return true;
        }
        //else if computerWeapon is 'SCISSOR', return false 
        else if(computerWeapon === 'SCISSOR')
        {
            return false;
        }

    }
    //---else if the userWeapon is 'SCISSOR'---------------------
    else if(userWeapon === 'SCISSOR')
    {
        //and if computerWeapon is 'PAPER', return true
        if(computerWeapon === 'PAPER')
        {
            return true;
        }
        //else if computerWeapon is 'ROCK', return false 
        else if(computerWeapon === 'ROCK')
        {
            return false;
        }

    }

    
    /*alert the message:
    "The weapons are the SAME type and I DO-NOT know WHAT-TO-DO,...
    ...please be sure that the weapons are distinct before calling me!!",
    >>when the caller send the same type of weapon!!
    
    Note: this line of code only run if NONE of the conditionals above are executed*/
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

//declare a var named 'theWinner' that gonna stores the winner of the game
let theWinner;

//declare a var named 'userScore' that stores the user score, and initialize it with int 0
let userScore = 0;

//declare a var named 'computerScore' that stores the computer score, and initialize it with int 0
let computerScore = 0;

//declare a var named 'roundCounter' that count the number of rounds, and initialize it with int 1
let roundCounter = 1;

/*declare a var named 'userWeapon' that gonna stores one of: "--Rock, Paper, Scissor--"
it will store the value that will be token from the user later */
let userWeapon;

/*declare a var named 'computerWeapon' that gonna stores one of: "--Rock, Paper, Scissor--"
it will store the value that will be generated randomly by the computer later */
let computerWeapon;


//make an infinite loop that only stop if 'userScore' OR 'computerScore' is equal to 5
while(true)
{
    //assign 'userWeapon' var with the output of 'getUserWeapon()'
    userWeapon = getUserWeapon();

    //assign 'computerWeapon' var with the output of 'getComputerWeapon()'
    computerWeapon = getComputerWeapon();

    //if the weapons are the same
    if (userWeapon === computerWeapon)
    {
        /*display the message: "The Round Number: ...;  it is a Tie-Round, No winner, No loser!"
        that shows a tie game, including the 'roundCounter' number* that show the round number/*/
        console.log(`The Round Number: ${roundCounter};  it is a Tie-Round, No winner, No loser!`);

        //increase 'roundCounter' by one
        ++roundCounter;
    }
    //else if the user is the round winner 
    else if(isUserWeaponTheStrongest(userWeapon, computerWeapon))
    {
        //increase 'userScore' by one;
        ++userScore;

        /*display the message: "The Round Number: ... ; RoundWinner: The USER.
        ---UserScore: ... ---  vs --- ComputerScore: ---
        the 'userWeapon' Beats the 'computerWeapon'"*/
        console.log(`The Round Number: ${roundCounter}; RoundWinner: The USER.\n---UserScore: ${userScore} ------  vs --- ComputerScore: ${computerScore}---\nthe ${userWeapon} Beats the ${computerWeapon}`);
        
        //increase 'roundCounter' by one
        ++roundCounter;
    }
    //else if the computer is the round winner
    else
    {
        //increase 'computerScore' by one
        ++computerScore;

        /*display the message: "The Round Number: ... ; RoundWinner: The COMPUTER.
        ---UserScore: ... ---  vs ---ComputerScore: ---
        the 'computerWeapon' Beats the 'userWeapon'"*/
        console.log(`The Round Number: ${roundCounter}; RoundWinner: The COMPUTER.\n---UserScore: ${userScore} ---  vs --- ComputerScore: ${computerScore}---\nthe ${computerWeapon} Beats the ${userWeapon}`);

        //increase 'roundCounter' by one
        ++roundCounter;
    }

    
    //if the 'userScore' is got to 5
    if(userScore === 5)
    {
        //set --assign-- 'theWinner' var to "USER" value
        theWinner = "USER";

        //break the loop, the winner is found successfully
        break;
    }
    //else if 'computerScore' is got to 5
    else if (computerScore === 5)
    {
        //set 'theWinner' var to "COMPUTER" value
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