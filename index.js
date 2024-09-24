let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    if (playerMove === 'rock') {
        a = `<button class="button-move">
        <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png" alt="rock" style="height: 70px;">
    </button>`
    }
    else if (playerMove === 'paper') {
        a = `<button class="button-move">
        <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png" alt="rock" style="height: 70px;">
    </button>`
    }
    else if (playerMove === 'scissors') {
        a = `<button class="button-move">
        <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png" alt="rock" style="height: 70px;">
    </button>`
    }

    if (computerMove === 'rock') {
        b = `<button class="button-move">
        <img src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png" alt="rock" style="height: 70px;">
    </button>`
    }
    else if (computerMove === 'paper') {
        b = `<button class="button-move">
        <img src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png" alt="rock" style="height: 70px;">
    </button>`
    }
    else if (computerMove === 'scissors') {
        b = `<button class="button-move">
        <img src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png" alt="rock" style="height: 70px;">
    </button>`
    }





    document.querySelector('.js-moves').innerHTML = `You ${a} - ${b} Computer`;

}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `<div class="score-line"><div style="font-weight: bold;">Wins:</div> <div>${score.wins}</div></div>  <div class="score-line"><div style="font-weight: bold;">Losses:</div> <div>${score.losses}</div></div>  <div class="score-line"><div style="font-weight: bold;">Ties:</div> <div>${score.ties}</div></div>`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

let value = true
let idno;
const autoupdate = () => {
    if (value) {
        let num = Math.floor(Math.random() * 10) % 3;
        let move = '';
        if (num == 0)
            move = 'rock'
        else if (num == 1)
            move = 'paper'
        else if (num == 2)
            move = 'scissors'
        idno = setInterval(function () {
            playGame(move)
        }, 2000);
        value = false
    }
    else {
        clearInterval(idno);
        value = true
    }

}
