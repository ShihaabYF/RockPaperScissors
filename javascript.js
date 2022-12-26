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
