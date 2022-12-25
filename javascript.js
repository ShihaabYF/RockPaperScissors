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


