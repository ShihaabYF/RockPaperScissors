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
