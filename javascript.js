'use strict'

/* declare a function called getUserWeapon(), it ask the user for one of --Rock, Paper, Scissor--,
if the user enter an invalid one it will keep asking until getting the right one: --Rock, Paper, Scissor--*/
/*deprecated: it was useful when the game was played from the console
but I will keep it for now*/
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


let userScore = 0;

let computerScore = 0;

/*'userWeapon' gonna stores one of: "--Rock, Paper, Scissor--"
it will store the value that will be token from the user later: from UI */
let userWeapon;

/*'computerWeapon' that gonna stores one of: "--Rock, Paper, Scissor--"
it will store the value that will be generated randomly by the computer later */
let computerWeapon;

let paperElem = document.querySelector('.playersScope .userSection .paper');
let rockElem = document.querySelector('.playersScope .userSection .rock');
let scissorElem = document.querySelector('.playersScope .userSection .scissor');

//winnerScope: it is the placed when a msg "That show if User Win or Lost" displayed
let winnerScope = document.querySelector('.winnerScope');

let userScoreElem = document.querySelector('.scorePart .userScore');
let computerScoreElem = document.querySelector('.scorePart .computerScore');

paperElem.addEventListener('click', judgeFun);
rockElem.addEventListener('click', judgeFun);
scissorElem.addEventListener('click', judgeFun);

/*these imgs are related to the weapon chosen by user and generated by computer */
let userImgElem = document.querySelector('.activeScope .userImg img');
let computerImgElem = document.querySelector('.activeScope .computerImg img');

//initial img shadow
userImgElem.classList.add('initialImgShadow');
computerImgElem.classList.add('initialImgShadow');



let resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', resetGame);

/* Reset everything to the initial states */
function resetGame()
{
    //reset the scores
    userScore = 0;
    computerScore = 0;
    userScoreElem.textContent = userScore;
    computerScoreElem.textContent = computerScore;

    //reset img to the initial one;
    userImgElem.setAttribute('src', './image/sand-clock.png');
    computerImgElem.setAttribute('src', './image/sand-clock.png');

    //remove the dynamic styling from imgs
    computerImgElem.classList.remove('winner');
    computerImgElem.classList.remove('looser');

    userImgElem.classList.remove('winner');
    userImgElem.classList.remove('looser');

    userImgElem.classList.remove('tieRound');
    computerImgElem.classList.remove('tieRound');

    //reset the winnerScopeMessage to its initial state
    winnerScope.innerHTML = 'Waiting for <strong>Battle</strong> to <strong>start</strong>';
    winnerScope.classList.remove('gameOver');
    winnerScope.classList.remove('userIsGameWinner');

    //initial shadow
    userImgElem.classList.add('initialImgShadow');
    computerImgElem.classList.add('initialImgShadow');
}


function  judgeFun(e)
{

    if((userScore < 5) && (computerScore < 5))
    {
        winnerScope.innerHTML = `The <strong>BATTLE</strong> is <strong>ON</strong>`;
        //set the userWeapon
        if(e.target === paperElem)
        {
            userWeapon = 'PAPER';
            userImgElem.setAttribute('src','./image/fly-paper.png')
        }
        else if(e.target === rockElem)
        {
            userWeapon = 'ROCK';
            userImgElem.setAttribute('src', './image/rock.png');
        }
        else
        {
            userWeapon = 'SCISSOR';
            userImgElem.setAttribute('src', './image/scissor.png');
        }

        //get the computerWeapon : random
        computerWeapon = getComputerWeapon();


        if(computerWeapon === 'PAPER')
        {
            computerImgElem.setAttribute('src', './image/fly-paper.png');
        }
        else if(computerWeapon === 'ROCK')
        {
            computerImgElem.setAttribute('src', './image/rock.png');
        }
        else if(computerWeapon === 'SCISSOR')
        {
            computerImgElem.setAttribute('src', './image/scissor.png');
        }


        /*compare weapons*/ 
        if(userWeapon === computerWeapon)
        {
            computerImgElem.classList.remove('winner');
            computerImgElem.classList.remove('looser');

            userImgElem.classList.remove('winner');
            userImgElem.classList.remove('looser');

            computerImgElem.classList.add('tieRound');
            userImgElem.classList.add('tieRound');
            
        }
        else if(isUserWeaponTheStrongest(userWeapon, computerWeapon))
        {
            userImgElem.classList.remove('looser');
            computerImgElem.classList.remove('winner');

            //remove the tieRound style
            userImgElem.classList.remove('tieRound');
            computerImgElem.classList.remove('tieRound');


            computerImgElem.classList.add('looser');
            userImgElem.classList.add('winner');


            ++userScore
            userScoreElem.textContent = userScore;

        }
        else
        {
            computerImgElem.classList.remove('looser');
            userImgElem.classList.remove('winner');

            //remove the tieRound style
            userImgElem.classList.remove('tieRound');
            computerImgElem.classList.remove('tieRound');
            


            userImgElem.classList.add('looser');
            computerImgElem.classList.add('winner');



            ++computerScore
            computerScoreElem.textContent = computerScore;

        }

        if(computerScore === 5)
        {
            document.querySelector('.winnerScope').textContent = 'GAME OVER, YOU\'RE LOST';
            document.querySelector('.winnerScope').classList.add('gameOver');
        }
        else if (userScore === 5)
        {
            document.querySelector('.winnerScope').textContent = 'YOU ARE THE WINNER';
            document.querySelector('.winnerScope').classList.add('userIsGameWinner');
        }

    }

}


