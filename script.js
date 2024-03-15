let score = JSON.parse(localStorage.getItem("score")) || {
        win: 0,
        lose: 0,
        tie: 0,
      };

      updateScoreElement();
      updateResult();
      // if (!score) {
      //   score = { win: 0, lose: 0, tie: 0 };
      // }
      function playGame(playerPick) {
        let result = "";
        const computerMove = pickComputerMove();
        if (playerPick === "scissors") {
          if (computerMove === "rock") {
            result = "You lose";
          } else if (computerMove === "paper") {
            result = "You won";
          } else if (computerMove === "scissors") {
            result = " its tie";
          }
        } else if (playerPick === "paper") {
          if (computerMove === "rock") {
            result = "You won";
          } else if (computerMove === "scissors") {
            result = "You lose";
          } else if (computerMove === "paper") {
            result = " its tie";
          }
        } else if (playerPick === "rock") {
          if (computerMove === "rock") {
            result = " its tie";
          } else if (computerMove === "paper") {
            result = "You lose";
          } else if (computerMove === "scissors") {
            result = "You won";
          }
        }

        if (result === "You won") {
          score.win += 1;
        } else if (result === "You lose") {
          score.lose += 1;
        } else if (result === " its tie") {
          score.tie += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

         document.querySelector('.js-result')
        .innerHTML = (result);
        
        document.querySelector('.js-move').innerHTML
        = (`you: 
        <img class="img" src="img/${playerPick}-emoji.png" alt="">
      computer:
      <img class="img" src="img/${computerMove}-emoji.png" alt="">
      `);

        updateScoreElement();   

      }
      function updateScoreElement(){
        document.querySelector('.js-updateScore')
          .innerHTML = `win:${score.win}. lose:${score.lose}. tie:${score.tie}`;
      
      }

 
      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = "";

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber < 1) {
          computerMove = "scissors";
        }

        console.log(computerMove);

        return computerMove;
      }
